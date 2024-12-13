import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Userchat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const socket = io('http://localhost:8080'); // Initialize socket.io

  // Use useEffect to set up the socket listeners
  useEffect(() => {


    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/message');
       
        setChatHistory(response.data.map(msg => `${msg.user}: ${msg.message}`));
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  

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
      socket.emit('userMessage', message);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        `You: ${message}`,
      ]);
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Contact Support</h1>
      <input
        id="userMessageInput"
        placeholder="Type a message to the admin"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendUserMessage}>Send Message</button>
      <div id="chat">
        {chatHistory.map((msg, index) => (
          <p style={{color:"black"}} key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default Userchat;
