import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Adminchat = () => {
  const [adminMessage, setAdminMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userId, setUserId] = useState('user123');
  const [adminId, setAdminId] = useState(localStorage.getItem('userId'));
  const [users, setUsers] = useState([]);
   const [socket, setSocket] = useState(null);
   const [socketConnected, setSocketConnected] = useState(false);
   // Ensure this matches your backend

  // On component mount, set up socket events
  useEffect(() => {
    const socket = io('http://localhost:8080');
    setSocket(socket)
    socket.on('connect', () => {
      console.log('Admin Connected to server');
      setSocketConnected(true);  // Update state when socket is connected
    });


    socket.on('userMessage', (data) => {
      if (data.userId === userId) { // Ensure the message is for the selected user
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { user: 'User', message: data.message, timestamp: new Date().toLocaleTimeString() }
        ]);
      }
    });
  
    socket.on('adminMessage', (data) => {
      if (data.userId === userId) { // Ensure the message is for the selected user
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { user: 'Admin', message: data.message, timestamp: new Date().toLocaleTimeString() }
        ]);
      }
    });


    fetchMessages()
    // Listen for incoming messages in the room
    // socket.on('userMessage', (data) => {
    //   console.log("user message",data)
    //   setChatMessages((prevMessages) => [
    //     ...prevMessages,
    //     { user: 'User', message: data.message, timestamp: new Date().toLocaleTimeString() }
    //   ]);
    // });

    // socket.on('adminMessage', (data) => {
    //   console.log("adminMessage ",data)
    //   setChatMessages((prevMessages) => [
    //     ...prevMessages,
    //     { user: 'Admin', message: data.message, timestamp: new Date().toLocaleTimeString() }
    //   ]);
    // });

    // Clean up socket event listeners
    return () => {
      socket.off('connect');
      socket.off('userMessage');
      socket.off('adminMessage');
    };
  }, [userId]);
  useEffect(() => {
    fetchMessages(userId); 
    fetchUsers() // Fetch messages when component mounts or user changes
  }, [userId]); 


  useEffect(() => {
    if (chatMessages.length > 0) {
      console.log('Chat messages updated:', chatMessages);
      // Optionally, trigger additional logic when messages are updated
    }
  }, [chatMessages]);
  // Fetch list of users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/user');
      setUsers(response.data);

  // Automatically select the first user (if any users are available)
  if (response.data.length > 0) {
    const firstUser = response.data[0];
    handleUserSelect(firstUser._id);
  }

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const fetchMessages = async (selectedUserId) => {
    if (!selectedUserId) return;
    console.log('Fetching messages for user ID:', selectedUserId);
    try {
      const response = await axios.get(`http://localhost:8080/message/${selectedUserId}`);
      console.log('Fetched messages:', response.data);
      setChatMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };



  // Handle user selection
  // const handleUserSelect = (selectedUserId) => {
  //   setUserId(selectedUserId);
  //   fetchMessages(selectedUserId); 
  //   // Emit an event to join a specific room (based on adminId and userId)
  //   const roomName = `chatroom-${selectedUserId}-${adminId}`;
  //   socket.emit('startChat', { userId: selectedUserId, adminId }); // Emit to server to handle room logic
  //   console.log(`Joined room: ${roomName}`);
  // };

  const handleUserSelect = (selectedUserId) => {
    setUserId(selectedUserId);
    setChatMessages([]);  // Clear previous chat messages
    fetchMessages(selectedUserId); 
  
    // Check if socket is initialized
    if (socket && socketConnected) {
      const roomName = `chatroom-${selectedUserId}-${adminId}`;
      socket.emit('startChat', { userId: selectedUserId, adminId });
      console.log(`Joined room: ${roomName}`);
    } else {
      console.error("Socket is not initialized yet.");
    }
  };
  


  // Send admin message
  const sendAdminMessage = () => {
    if (adminMessage.trim() !== '') {
      const messageData = {
        user: 'Admin',
        userId: userId,  // User's ID, make sure this is defined
        adminId: adminId,  // Admin's ID, make sure this is defined
      
        message: adminMessage,
        timestamp: new Date().toISOString(),
      };
      socket.emit('adminMessage', messageData);
      setChatMessages((prev) => [
        ...prev,
        { user: 'Admin', message: adminMessage, timestamp: new Date().toISOString() }
      ]);
      setAdminMessage('');
    }
  };

  return (
    <div className="body">
      <div id="frame">
        <div id="sidepanel">
          {/* Profile and user list */}
          <div id="contacts">
            <ul>
              {users.map((user) => (
                <li className="contact" key={user._id} onClick={() => handleUserSelect(user._id)}>
                  <div className="wrap">
                    <span className="contact-status online"></span>
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                    <div className="meta">
                      <p className="name">{user.username}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="contact-profile">
            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
            <p>Chat with: {userId}</p>
          </div>

          <div className="messages">
            <ul>
              {chatMessages.map((message, index) => {
                console.log(chatMessages,"chat message")
                const { user, message: text, timestamp } = message;
                return (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                    {user === 'Admin' ? (
                      <li className="sent">
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                        {`${user}: ${text}`}
                        <br />
                        <span style={{ color: 'black' }} className="timestamp">{timestamp}</span>
                      </li>
                    ) : (
                      <li className="replies">
                        <img src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" alt="" />
                        {`${user}: ${text}`}
                        <br />
                        <span style={{ color: 'black' }} className="timestamp">{timestamp}</span>
                      </li>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>

          <div className="message-input">
            <div className="wrap">
              <input
                type="text"
                placeholder="Write your message..."
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
              />
              <button onClick={sendAdminMessage} className="submit">
                <i className="fa-solid fa-paper-plane fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminchat;
