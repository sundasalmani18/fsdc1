import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Userchat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const socket = io(); // Initialize socket.io

  // Use useEffect to set up the socket listeners
  useEffect(() => {
    // Listen for messages from the admin
    socket.on('adminMessage', (adminMessage) => {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        `Admin: ${adminMessage}`,
      ]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

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

