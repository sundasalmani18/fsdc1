import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Userchat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Example user ID
  const [adminId, setAdminId] = useState('admin123'); // Example admin ID

  const [socket, setSocket] = useState(null);

 // const socket = io('http://localhost:8080'); // Connect to the server

  useEffect(() => {
      // Create socket connection on mount
      const socket= io('http://localhost:8080');
      setSocket(socket);
    fetchMessages();
    socket.on('connect', () => {
      console.log('User Connected to server');
      socket.emit('joinRoom', userId);  // Join the room for the user
    });

    socket.on('adminMessage', (data) => {
      console.log('Received admin message:', data.message);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: 'Admin', message: data.message, timestamp: new Date().toISOString() },
      ]);
    });

    socket.on('userMessage', (data) => {
      console.log('Received user message:', data.message);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: 'You', message: data.message, timestamp: new Date().toISOString() },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);



  useEffect(() => {
    // Fetch chat history whenever userId changes
    if (userId && socket) {
      socket.emit('getChatHistory', userId);
    }
  }, [userId, socket]);

  const fetchMessages = async () => {
    try {
      // Fetch messages for this user
      const response = await axios.get(`http://localhost:8080/message/${userId}`);
      console.log("response", response.data)
      // Update chat history with messages
      setChatHistory(response.data.map(msg => ({
        user: msg.senderId === userId ? 'You' : 'Admin',
        message: msg.message,
        timestamp: msg.timestamp,
      })));
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };



  const sendUserMessage = () => {
    if (message.trim() !== '') {
      const messageData = {
        user: 'User',
        senderId: userId,
        receiverId: adminId,
        message: message,
        timestamp: new Date().toISOString(),
      };
      socket.emit('userMessage', messageData);  // Emit message to the admin's room
      console.log("user message",messageData)
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: 'You', message: message, timestamp: new Date().toISOString() },
      ]);
      setMessage('');  // Clear the input field
    }
  };

  return (
    <div>
      {/* UI Layout as before */}
      <div>
        {chatHistory.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}: </strong>{msg.message}
            <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendUserMessage}>Send</button>
    </div>
  );
};

export default Userchat;
