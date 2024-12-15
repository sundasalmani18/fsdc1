// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';

// const Adminchat = () => {

//     const [adminMessage, setAdminMessage] = useState('');
//     const [notifications, setNotifications] = useState([]);
//     const [chatMessages, setChatMessages] = useState([]);
//     const [isAdminOnline, setIsAdminOnline] = useState(true); // Track if admin is online
  
//     // Initialize the socket connection
//     const socket = io('http://localhost:8080'); // Ensure this matches your server's URL and port

     
//     // useEffect to set up socket listeners
//     useEffect(() => {
    

//       // Connect to the Socket.IO server
//     socket.on('connect', () => {
//       console.log('Admin Connected to server');
//       setIsAdminOnline(true); // Set admin as online
     
//     });
 
//        // Listen for messages from the user
//    socket.on('userMessage', (message) => {
//     setChatMessages((prevChatMessages) => [...prevChatMessages, `User: ${message}`]);
//   });
//    fetchMessages();

//      // Listen for admin disconnect (when admin is offline)
//      socket.on('disconnect', () => {
//       console.log('Admin disconnected from server');
//       setIsAdminOnline(false); // Set admin as offline
//       sendDemoMessage();
//     });

//       // Listen for notifications about new form submissions
//       socket.on('adminNotification', (data) => {
//         setNotifications((prevNotifications) => [
//           ...prevNotifications,
//           `New message from: ${data.name} (${data.email}): ${data.message}`,
//         ]);
//       });

//       //Listen for messages from the admin
//     socket.on('adminMessage', (data) => {
//       setChatMessages((prevChatHistory) => [
//         ...prevChatHistory,
//         `User: ${data}`,
//       ]);
//     });
  
  
//       // Clean up the socket connection when the component unmounts
//       return () => {
     
//       socket.off('disconnect');
//       };
//     }, []);

// //  // Check and send demo message when admin is offline
//  useEffect(() => {
//   if (!isAdminOnline) {
//     // Trigger sending demo message when admin goes offline
//     sendDemoMessage();
//   }
// }, [isAdminOnline]); // This effect runs when `isAdminOnline` changes


//   // Function to send a demo message if the admin is offline
//   const sendDemoMessage = () => {
//     const demoMessage = "Admin is currently offline, but we will get back to you soon!";
//     setChatMessages((prevChatMessages) => [
//       ...prevChatMessages,
//       `Admin: ${demoMessage}`,
//     ]);
//     // Optionally, you could also emit this demo message to the server (if required by your server logic)
//     socket.emit('userMessage', demoMessage);
//   };
// // Fetch chat history from MongoDB
// const fetchMessages = async () => {
// try {
//   const response = await axios.get('http://localhost:8080/message');
 
//   setChatMessages(response.data.map(msg => `${msg.user}: ${msg.message}`));
// } catch (error) {
//   console.error('Error fetching messages:', error);
// }
// };
  
//     // Send a message to the user
//     const sendAdminMessage = () => {
//       if (adminMessage.trim() !== '') {
//         socket.emit('adminMessage', adminMessage);
//         setChatMessages((prevChatMessages) => [...prevChatMessages, `You: ${adminMessage}`]);
//         setAdminMessage(''); // Clear the input field
//       }
//     };



 

 


//      // Render message for offline admin
//   const renderOfflineMessage = () => {
//     if (!isAdminOnline) {
//       return <p style={{ color: 'red' }}>Admin is currently offline, will join you soon.</p>;
//     }
//     return null;
//   };

   
  
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
//         {renderOfflineMessage()} 
//           {chatMessages.map((msg, index) => (
//             <p  style={{color:"black"}} key={index}>{msg}</p>
//           ))}
//         </div>
//       </div>
//     );
//   };


// export default Adminchat




import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Adminchat = () => {
    const [adminMessage, setAdminMessage] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
    const [isAdminOnline, setIsAdminOnline] = useState(true); // Track if admin is online
  
    // Initialize the socket connection
    const socket = io('http://localhost:8080'); // Ensure this matches your server's URL and port

    // useEffect to set up socket listeners
    useEffect(() => {
        // Connect to the Socket.IO server
        socket.on('connect', () => {
            console.log('Admin Connected to server');
            setIsAdminOnline(true); // Set admin as online
        });
 
        // Listen for messages from the user
        socket.on('userMessage', (message) => {
            setChatMessages((prevChatMessages) => [...prevChatMessages, `User: ${message}`]);
        });

        fetchMessages();

        // Listen for admin disconnect (when admin is offline)
        socket.on('disconnect', () => {
            console.log('Admin disconnected from server');
            setIsAdminOnline(false); // Set admin as offline
        });

        // Listen for notifications about new form submissions
        socket.on('adminNotification', (data) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                `New message from: ${data.name} (${data.email}): ${data.message}`,
            ]);
        });

        // Listen for messages from the admin
        socket.on('adminMessage', (data) => {
            setChatMessages((prevChatHistory) => [
                ...prevChatHistory,
                `User: ${data}`,
            ]);
        });
  
        // Clean up the socket connection when the component unmounts
        return () => {
            socket.off('disconnect');
            socket.off('connect');
            socket.off('userMessage');
            socket.off('adminNotification');
            socket.off('adminMessage');
        };
    }, []);

    // Check and send demo message when admin is offline
    useEffect(() => {
        if (!isAdminOnline) {
            // Trigger sending demo message only once when admin goes offline
            sendDemoMessage();
        }
    }, [isAdminOnline]); // This effect runs when `isAdminOnline` changes

    // Function to send a demo message if the admin is offline
    const sendDemoMessage = () => {
        const demoMessage = "Admin is currently offline, but we will get back to you soon!";
        setChatMessages((prevChatMessages) => [
            ...prevChatMessages,
            `Admin: ${demoMessage}`,
        ]);
        // Optionally, you could also emit this demo message to the server (if required by your server logic)
        socket.emit('userMessage', demoMessage);
    };

    // Fetch chat history from MongoDB
    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/message');
            setChatMessages(response.data.map((msg) => `${msg.user}: ${msg.message}`));
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    // Send a message to the user
    const sendAdminMessage = () => {
        if (adminMessage.trim() !== '' && isAdminOnline) {
            socket.emit('adminMessage', adminMessage);
            setChatMessages((prevChatMessages) => [...prevChatMessages, `You: ${adminMessage}`]);
            setAdminMessage(''); // Clear the input field
        } else if (!isAdminOnline) {
            alert('You cannot send messages while you are offline.');
        }
    };

    // Render message for offline admin
    const renderOfflineMessage = () => {
        if (!isAdminOnline) {
            return <p style={{ color: 'red' }}>Admin is currently offline, will join you soon.</p>;
        }
        return null;
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
                {renderOfflineMessage()}
                {chatMessages.map((msg, index) => (
                    <p key={index} style={{ color: 'black' }}>
                        {msg}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Adminchat;
