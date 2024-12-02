// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const Adminchat = () => {

//     const [adminMessage, setAdminMessage] = useState('');
//     const [notifications, setNotifications] = useState([]);
//     const [chatMessages, setChatMessages] = useState([]);
  
//     // Initialize the socket connection
//     const socket = io(); // Ensure this matches your server's URL and port
  
//     // useEffect to set up socket listeners
//     useEffect(() => {
//       // Listen for notifications about new form submissions
//       socket.on('adminNotification', (data) => {
//         setNotifications((prevNotifications) => [
//           ...prevNotifications,
//           `New message from: ${data.name} (${data.email}): ${data.message}`,
//         ]);
//       });
  
//       // Listen for messages from the user
//       socket.on('userMessage', (message) => {
//         setChatMessages((prevChatMessages) => [...prevChatMessages, `User: ${message}`]);
//       });
  
//       // Clean up the socket connection when the component unmounts
//       return () => {
//         socket.disconnect();
//       };
//     }, [socket]);
  
//     // Send a message to the user
//     const sendAdminMessage = () => {
//       if (adminMessage.trim() !== '') {
//         socket.emit('adminMessage', adminMessage);
//         setChatMessages((prevChatMessages) => [...prevChatMessages, `You: ${adminMessage}`]);
//         setAdminMessage(''); // Clear the input field
//       }
//     };
  
//     return (
//       <div>
//         <h1>Admin Dashboard</h1>
//         <div id="notifications">
//           {notifications.map((notification, index) => (
//             <p key={index}>{notification}</p>
//           ))}
//         </div>
//         <input
//           id="adminMessageInput"
//           placeholder="Type a message to the user"
//           value={adminMessage}
//           onChange={(e) => setAdminMessage(e.target.value)}
//         />
//         <button onClick={sendAdminMessage}>Send Message</button>
//         <div id="chat">
//           {chatMessages.map((msg, index) => (
//             <p  style={{color:"black"}} key={index}>{msg}</p>
//           ))}
//         </div>
//       </div>
//     );
//   };


// export default Adminchat



// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const AdminChat = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [chatMessages, setChatMessages] = useState([]);
//   const [adminMessage, setAdminMessage] = useState('');

//   // Initialize socket connection (ensure this matches your server's URL and port)
//   const socket = io();

//   // First useEffect: Listen for notifications about new messages from users
//   useEffect(() => {
//     socket.on('adminNotification', (data) => {
//       setNotifications((prevNotifications) => [
//         ...prevNotifications,
//         `New message from: ${data.name} (${data.email}): ${data.message}`,
//       ]);
//     });

//     // Cleanup socket connection when component is unmounted
//     return () => {
//       socket.off('adminNotification');
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   // Second useEffect: Listen for user messages
//   useEffect(() => {
//     socket.on('userMessage', (message) => {
//       setChatMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'user', text: message },
//       ]);
      
//     });
//     console.log("chat Message",chatMessages)

//     // Cleanup socket connection when component is unmounted
//     return () => {
//       socket.off('userMessage');
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   // Handle sending a message to the user
//   const sendAdminMessage = () => {
//     if (adminMessage.trim() !== '') {
//       socket.emit('adminMessage', adminMessage);
//       setChatMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'admin', text: adminMessage },
//       ]);
//       setAdminMessage(''); // Clear input field
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       {/* Notifications section */}
//       <div id="notifications">
//         {notifications.map((notification, index) => (
//           <p key={index}>{notification}</p>
//         ))}
//       </div>

//       {/* Admin Message Input */}
//       <input
//         type="text"
//         value={adminMessage}
//         onChange={(e) => setAdminMessage(e.target.value)}
//         placeholder="Type a message to the user"
//       />
//       <button onClick={sendAdminMessage}>Send Message</button>

//       {/* Chat Section */}
//       <div id="chat">
//         {chatMessages.map((msg, index) => (
//           <p
//             key={index}
//             className={msg.type}
//             style={{
//               backgroundColor: msg.type === 'admin' ? '#4CAF50' : '#f1f1f1',
//               color: msg.type === 'admin' ? 'white' : 'black',
//               textAlign: msg.type === 'admin' ? 'right' : 'left',
//               padding: '10px',
//               margin: '5px',
//               borderRadius: '5px',
//             }}
//           >
//             {msg.type === 'admin' ? 'Admin: ' : 'User: '}
//             {msg.text}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminChat;




import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Make sure the URL matches your backend Socket.io server
const socket = io(); // default is to connect to the server that served the page

const AdminChat = () => {
  const [adminMessage, setAdminMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Listen for notifications about new messages
  useEffect(() => {
    socket.on('adminNotification', (data) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        `New message from: ${data.name} (${data.email}): ${data.message}`,
      ]);
    });

    // Listen for messages from the user
    socket.on('userMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'user', message }]);
    });

    // Listen for messages from the admin
    socket.on('adminMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'admin', message }]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('adminNotification');
      socket.off('userMessage');
      socket.off('adminMessage');
    };
  }, []);

  // Handle sending a message from the admin
  const sendAdminMessage = () => {
    if (adminMessage.trim()) {
      socket.emit('adminMessage', adminMessage); // Emit the message to the user
      setMessages((prevMessages) => [...prevMessages, { sender: 'admin', message: adminMessage }]);
      setAdminMessage(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Display Notifications */}
      <div id="notifications">
        {notifications.length > 0 && (
          <div>
            <h2>New Messages</h2>
            {notifications.map((notification, index) => (
              <p key={index}>{notification}</p>
            ))}
          </div>
        )}
      </div>

      {/* Admin message input */}
      <input
        id="adminMessageInput"
        value={adminMessage}
        onChange={(e) => setAdminMessage(e.target.value)}
        placeholder="Type a message to the user"
      />
      <button onClick={sendAdminMessage}>Send Message</button>

      {/* Display Chat */}
      <div id="chat">
        {messages.length > 0 &&
          messages.map((msg, index) => (
            <p key={index} className={msg.sender === 'admin' ? 'admin' : 'user'}>
              {msg.sender}: {msg.message}
            </p>
          ))}
      </div>
    </div>
  );
};

export default AdminChat;
