import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Adminchat = () => {

    const [adminMessage, setAdminMessage] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
  
    // Initialize the socket connection
    const socket = io('http://localhost:8080'); // Ensure this matches your server's URL and port
  
    // useEffect to set up socket listeners
    useEffect(() => {

      // Connect to the Socket.IO server
    socket.on('connect', () => {
      console.log('Admin Connected to server');
    });
    
      // Listen for notifications about new form submissions
      socket.on('adminNotification', (data) => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          `New message from: ${data.name} (${data.email}): ${data.message}`,
        ]);
      });

      //Listen for messages from the admin
    socket.on('adminMessage', (data) => {
      setChatMessages((prevChatHistory) => [
        ...prevChatHistory,
        `User: ${data}`,
      ]);
    });
  
      // Listen for messages from the user
      socket.on('userMessage', (message) => {
        setChatMessages((prevChatMessages) => [...prevChatMessages, `User: ${message}`]);
      });
  
      // Clean up the socket connection when the component unmounts
      return () => {
        socket.disconnect();
      };
    }, [socket]);
  
    // Send a message to the user
    const sendAdminMessage = () => {
      if (adminMessage.trim() !== '') {
        socket.emit('adminMessage', adminMessage);
        setChatMessages((prevChatMessages) => [...prevChatMessages, `You: ${adminMessage}`]);
        setAdminMessage(''); // Clear the input field
      }
    };
  
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <div id="notifications">
          {notifications.map((notification, index) => (
            <p key={index}>{notification}</p>
          ))}
        </div>
        <input
          id="adminMessageInput"
          placeholder="Type a message to the user"
          value={adminMessage}
          onChange={(e) => setAdminMessage(e.target.value)}
        />
        <button onClick={sendAdminMessage}>Send Message</button>
        <div id="chat">
          {chatMessages.map((msg, index) => (
            <p  style={{color:"black"}} key={index}>{msg}</p>
          ))}
        </div>
      </div>
    );
  };


export default Adminchat

