import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Adminchat = () => {

    const [adminMessage, setAdminMessage] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
    const [isAdminOnline, setIsAdminOnline] = useState(true); // Track if admin is online
    const [userId, setUserId] = useState('user123'); // Example user ID
    const [adminId, setAdminId] = useState('admin123'); // Example admin ID
  
    // Initialize the socket connection
    const socket = io('http://localhost:8080'); // Ensure this matches your server's URL and port

        
    // useEffect to set up socket listeners
    useEffect(() => {
      // Connect to the Socket.IO server
    socket.on('connect', () => {
      console.log('Admin Connected to server');
      setIsAdminOnline(true); // Set admin as online
     
    });
 
      // Listen for notifications about new form submissions
      socket.on('adminNotification', (data) => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          `New message from: ${data.name} (${data.email}): ${data.message}`,
        ]);
      });
      



      socket.on('userMessage', (message) => {
        setChatMessages((prevChatMessages) => [...prevChatMessages, `User: ${message}`]);
      });
      //Listen for messages from the admin
    socket.on('adminMessage', (data) => {
      setChatMessages((prevChatHistory) => [
        ...prevChatHistory,
        `User: ${data}`,
      ]);
    });
  
    socket.on('disconnect', () => {
      console.log('Admin disconnected from server');
      setIsAdminOnline(false); // Set admin as offline
    //  sendDemoMessage();
    });
    fetchMessages();
      // Clean up the socket connection when the component unmounts
      return () => {
      
    socket.off('connect');
    socket.off('adminNotification');
    socket.off('userMessage');
    socket.off('adminMessage');
    socket.off('disconnect');
      };
    }, []);



// Fetch chat history from MongoDB
const fetchMessages = async () => {
  try {
    const response = await axios.get('http://localhost:8080/message');
   
    setChatMessages(response.data.map(msg => `${msg.user}: ${msg.message}`));
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
  };
  // Function to send a demo message if the admin is offline
  const sendDemoMessage = () => {
    const demoMessage = "Admin is currently offline, but we will get back to you soon!";
    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      `Admin: ${demoMessage}`,
    ]);
    // Optionally, you could also emit this demo message to the server (if required by your server logic)
    socket.emit('adminMessage', demoMessage);
  };

  
    // Send a message to the user
    const sendAdminMessage = () => {
      if (adminMessage.trim() !== '') {
        const messageData = {
          senderId: adminId,
          receiverId: userId, // Assuming admin sends messages to user
          message: adminMessage,
        };
        socket.emit('adminMessage', messageData);
        setChatMessages((prevChatMessages) => [...prevChatMessages, `You: ${adminMessage}`]);
        setAdminMessage(''); // Clear the input field
      }
    };



     // Render message for offline admin
  const renderOfflineMessage = () => {
    if (!isAdminOnline) {
      return <p style={{ color: 'red' }}>Admin is currently offline, will join you soon.</p>;
    }
    return null;
  };

    // Check and send demo message when admin is offline
    useEffect(() => {
      if (!isAdminOnline) {
        // Trigger sending demo message when admin goes offline
       sendDemoMessage();
      }

      console.log("Admin online status changed:", isAdminOnline);
    }, [isAdminOnline]); // This effect runs when `isAdminOnline` changes

    return (
<>
      <div class="container">
      <div class="d-flex justify-content-center m-3">
        <h3 class="align-center">Admin Support Chat System</h3>
      </div>
      
        {notifications.map((notification, index) => (
            <p key={index}>{notification}</p>
          ))}

{/* {renderOfflineMessage()}  
          {chatMessages.map((msg, index) => (
            <p  style={{color:"black"}} key={index}>{msg}</p>
          ))} */}
      <div id="messages">
        {console.log('chatMessages', chatMessages)}
         {/* <div class="msg-left"> */}
        {/* <div id="notifications">
        {chatMessages
            .filter(message => message.startsWith("Admin"))
            .map((message, index) => {
              const messageText = message.split(": ").slice(1).join(": ");
              return <div key={index} className="msg">{messageText}</div>;
            })}
          
        </div>
        </div>
         <div class="msg-right">
         <div id="chat">
          
         {chatMessages
            .filter(message => message.startsWith("User"))
            .map((message, index) => {
              const messageText = message.split(": ").slice(1).join(": ");
              return <div key={index} className="msg">{messageText}</div>;
            })}
        </div>
        </div>  */}
        
        {chatMessages.map((message, index) => {
        const [role, ...messageText] = message.split(": ");
        const text = messageText.join(": ");

        return (
          <div
            key={index}
            style={{
              alignSelf: role === "Admin" ? "flex-start" : "flex-end",
              backgroundColor: role === "Admin" ? "#f1f1f1" : "#e1e1e2",
              padding: "10px",
              borderRadius: "5px",
              maxWidth: "70%",
            }}
          >
            {text}
          </div>
        );
      })}
     
        {/* Left div for Admin messages */}
      {/* <div style={{ width: "45%", backgroundColor: "#f1f1f1", padding: "10px" }}>
        <div id="notifications">
          {chatMessages
            .filter(message => message.startsWith("Admin"))
            .map((message, index) => {
              const messageText = message.split(": ").slice(1).join(": ");
              return <div key={index} className="msg">{messageText}</div>;
            })}
        </div>
      </div> */}

       {/* Right div for User messages */}
       {/* <div style={{ width: "45%", backgroundColor: "#e1e1e1", padding: "10px" }}>
        <div id="chat">
          {chatMessages
            .filter(message => message.startsWith("User"))
            .map((message, index) => {
              const messageText = message.split(": ").slice(1).join(": ");
              return <div key={index} className="msg">{messageText}</div>;
            })}
        </div>
      </div> */}
        
  
        <div class="input-group mb-3">
          <input type="text" class="form-control"
           id="adminMessageInput"
           placeholder="Type a message to the user"
           value={adminMessage}
           onChange={(e) => setAdminMessage(e.target.value)}
           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" onClick={sendAdminMessage}>Submit</button>
          
          </div>
          </div>
        
        
    </div>
    
  
  
  
  </div>
      {/* <div>
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
            <p  style={{color:"black"}} key={index}>{msg}</p>
          ))}
        </div>
      </div> */}
      </>
    );
  };


 export default Adminchat

