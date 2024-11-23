// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const Userchat = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const socket = io(); // Initialize socket.io

//   // Use useEffect to set up the socket listeners
//   useEffect(() => {
//     // Listen for messages from the admin
//     socket.on('adminMessage', (adminMessage) => {
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         `Admin: ${adminMessage}`,
//       ]);
//     });

//     // Clean up the socket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, [socket]);

//   // Send a message to the admin
//   const sendUserMessage = () => {
//     if (message.trim() !== '') {
//       socket.emit('userMessage', message);
//       setChatHistory((prevChatHistory) => [
//         ...prevChatHistory,
//         `You: ${message}`,
//       ]);
//       setMessage(''); // Clear the input field
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Support</h1>
//       <input
//         id="userMessageInput"
//         placeholder="Type a message to the admin"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendUserMessage}>Send Message</button>
//       <div id="chat">
//         {chatHistory.map((msg, index) => (
//           <p style={{color:"black"}} key={index}>{msg}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Userchat;



// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const UserChat = () => {
//   // Initialize socket connection
//   const socket = io();

//   // State for the user's message input and chat messages
//   const [userMessage, setUserMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

//   // Function to send a message to the admin
//   const sendUserMessage = () => {
//     if (userMessage) {
//       socket.emit('userMessage', userMessage);
//       setChatMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userMessage }]);
//       setUserMessage(''); // Clear input after sending
//     }
//   };

//   // Listen for messages from the admin
//   useEffect(() => {
//     socket.on('adminMessage', (message) => {
//       setChatMessages((prevMessages) => [...prevMessages, { sender: 'admin', text: message }]);
//     });

//     // Cleanup socket connections on component unmount
//     return () => {
//       socket.off('adminMessage');
//     };
//   }, []); // Empty dependency array means this effect runs once after initial render

//   return (
//     <div>
//       <h1>Contact Support</h1>
//       <input
//         id="userMessageInput"
//         placeholder="Type a message to the admin"
//         value={userMessage}
//         onChange={(e) => setUserMessage(e.target.value)}
//       />
//       <button onClick={sendUserMessage}>Send Message</button>
//       <div id="chat">
//         {chatMessages.map((msg, index) => (
//           <p key={index} className={msg.sender}>
//             <strong>{msg.sender === 'user' ? 'You' : 'Admin'}:</strong> {msg.text}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserChat;




import React, { useState, useEffect } from 'react';
import { useSocket } from '../context/socketContext'; // Hook to access socket connection

const UserChat = () => {
  const socket = useSocket();
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // Send message to the admin
  const sendUserMessage = () => {
    if (userMessage) {
      socket.emit('userMessage', userMessage);  // Emit message to the server
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userMessage },
      ]);
      setUserMessage('');  // Clear input after sending
    }
  };

  // Listen for messages from the admin
  useEffect(() => {
    if (socket) {
      socket.on('adminMessage', (message) => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'admin', text: message },
        ]);
      });

      // Cleanup the listener when the component unmounts
      return () => {
        socket.off('adminMessage');
      };
    }
  }, [socket]);

  return (
    <div>
      <h1>Contact Support</h1>
      <input
        id="userMessageInput"
        placeholder="Type a message to the admin"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button onClick={sendUserMessage}>Send Message</button>
      <div id="chat">
        {chatMessages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            <strong>{msg.sender === 'user' ? 'You' : 'Admin'}:</strong> {msg.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserChat;

