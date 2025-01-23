import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
         console.log("response",response.data)
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
      { user: 'Admin', message: data.message, timestamp: new Date().toISOString() },
    ]);
  });

  // Listen for messages from the user
  socket.on('userMessage', (data) => {
    setChatHistory((prevMessages) => [
      ...prevMessages,
      { user: 'You', message: data.message, timestamp: new Date().toISOString() },
    ]);
  });
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
        receiverId: adminId,
        message: message,
      };
      socket.emit('userMessage', messageData);  // Emit the message to the server

      // Update chat history locally
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: 'You', message: message, timestamp: new Date().toISOString() },
      ]);

      setMessage(''); // Clear the input field
    }
  };
console.log("chat history",chatHistory)
  console.log({ adminId })



    // Check if the timestamps are in correct format first
    // chatHistory.forEach(message => {
    //   console.log("1",message);  // Log entire message object
    //   console.log("2",message.user);  // Log just the 'user' field
    //   console.log("3",message.message);
    // });
    // // Ensure timestamps are properly converted to Date objects
    // const sortedMessages = [...chatHistory].sort((a, b) => {
    //   const dateA = a.timestamp ? Date.parse(a.timestamp) : NaN;  // If timestamp is invalid, assign NaN
    //   const dateB = b.timestamp ? Date.parse(b.timestamp) : NaN;  // If timestamp is invalid, assign NaN
  
    //   // Log the parsed date to ensure correct parsing
    //   console.log("Date A:", dateA, "Date B:", dateB);
  
    //   // Sorting by timestamp in ascending order (oldest first)
    //   return dateA - dateB;
    // });
  return (
    <>

       <div className='body'>
             <div id="frame" >
               <div id="sidepanel">
                 <div id="profile">
                   <div className="wrap">
                     <img id="profile-img" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="online" alt="" />
                     <p>Mike Ross</p>
                     <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                     <div id="status-options">
                       <ul>
                         <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                         <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                         <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                         <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                       </ul>
                     </div>
                     <div id="expanded">
                       <FontAwesomeIcon icon={faCoffee} class="fa" size="3x" />
                       <label for="twitter"><i className="fa fa-utensils me-3 fa-2x "></i></label>
                       <input name="twitter" type="text" value="mikeross" />
                       <label for="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                       <input name="twitter" type="text" value="ross81" />
                       <label for="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                       <input name="twitter" type="text" value="mike.ross" />
                     </div>
                   </div>
                 </div>
                 <div id="search">
                   <label for=""><i className="fa fa-search" aria-hidden="true"></i></label>
                   <input type="text" placeholder="Search contacts..." />
                 </div>
                 <div id="contacts">
                   {/* <ul>
     
     
                     {users.map((user) => (
                       <li className="contact">
     
     
                         <div className="wrap" key={user.id} onClick={() => handleUserSelect(user._id)}>
     
                           <span className="contact-status online"></span>
                           <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                           <div className="meta">
                             <p className="name">   {user.username}</p>
     
                           </div>
                         </div>
     
                       </li>
                     ))}
     
                   </ul> */}
                 </div>
                 <div id="bottom-bar">
                   <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                   <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
                 </div>
               </div>
               <div className="content">
                 <div className="contact-profile">
                   <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                   <p>Harvey Specter</p>
                   <div className="social-media">
                     <i className="fa fa-facebook" aria-hidden="true"></i>
                     <i className="fa fa-twitter" aria-hidden="true"></i>
                     <i className="fa fa-instagram" aria-hidden="true"></i>
                   </div>
                 </div>
                 <div className="messages">
              <ul>
                {chatHistory.map((msg, index) => (
                  <li key={index} className={msg.user === 'You' ? 'sent' : 'received'}>
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                    <div>
                      <strong style={{ color: 'black' }}>{msg.user}: </strong>
                      <span style={{ color: 'black' }}>{msg.message}</span><br/>
                      <small style={{ color: 'black' }}>{new Date(msg.timestamp).toLocaleTimeString()}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
                 <div className="message-input">
                   <div className="wrap">
                     <input type="text" placeholder="Write your message..."    value={message}
              onChange={(e) => setMessage(e.target.value)}/>
                     <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                     <button onClick={sendUserMessage}className="submit"><i class="fa-solid fa-paper-plane fa-2x"></i></button>
                   </div>
                 </div>
               </div>
             </div>
     
           </div>





{/* 
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




      </div> */}






    </>
  );
};

export default Userchat;

