import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Userchat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Example user ID
  const [adminId, setAdminId] = useState('admin123'); // Example admin ID

  const socket = io('http://localhost:8080'); // Initialize socket.io

  // Use useEffect to set up the socket listeners
  useEffect(() => {



    const fetchMessages = async () => {
      try {
        // Fetch messages for this user
        const response = await axios.get(`http://localhost:8080/message/${userId}`);

        // Update chat history with messages
        setChatHistory(response.data.map(msg => {
          return `${msg.senderId === userId ? 'You' : 'Admin'}: ${msg.message}`;
        }));
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };



    // const fetchMessages = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:8080/message');

    //     // console.log('response', response)

    //     setChatHistory(response.data.map(msg => `${msg.user}: ${msg.message}`));
    //     setAdminId(response.data.map(msg => msg?.senderId));

    //     // setChatHistory(response.data.map(msg => {
    //     //   return `${msg.user}: ${msg.message}, receiverId: ${msg?.receiverId}, senderId: ${msg?.senderId}`;
    //     // }));

    //     // setChatHistory(response.data.map(msg => ({
    //     //   user: msg.user,
    //     //   message: msg.message,
    //     //   receiverId: msg?.receiverId,
    //     //   senderId: msg?.senderId
    //     // })));
    //   } catch (error) {
    //     console.error('Error fetching messages:', error);
    //   }
    // };


    fetchMessages();

    // Connect to the Socket.IO server
    socket.on('connect', () => {
      console.log('User Connected to server');
    });

    // Listen for messages from the admin
    socket.on('adminMessage', (data) => {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        `Admin: ${data}`,
      ]);
    });

    // Listen for messages from the user
    socket.on('userMessage', (data) => {
      setChatHistory((prevMessages) => [...prevMessages, `Admin: ${data}`]);
    })

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Send a message to the admin
  const sendUserMessage = () => {
    if (message.trim() !== '') {
      const messageData = {
        senderId: userId,
        receiverId: adminId[0], // Sending message to the admin
        message: message,
      };
      socket.emit('userMessage', messageData);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        `You: ${message}`,
      ]);
      setMessage(''); // Clear the input field
    }
  };

  console.log({ adminId })
  return (
    <>
      <div class="container">
        <div class="d-flex justify-content-center m-3">
          <h3 class="align-center">User Support Chat System</h3>
        </div>


        <div id="messages">

          <div class="msg-left">

          </div>
          <div class="msg-right">
            <div id="chat">
              {chatHistory.map((msg, index) => (
                <p style={{ color: "black" }} key={index}>{msg}</p>
              ))}
            </div>
          </div>


          <div class="input-group mb-3">
            <input type="text" class="form-control"
              id="userMessageInput"
              placeholder="Type a message to the admin"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" onClick={sendUserMessage}>Submit</button>

            </div>
          </div>


        </div>




      </div>






    </>
  );
};

export default Userchat;

