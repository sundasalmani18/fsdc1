import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Userchat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Example user ID
  // const [adminId, setAdminId] = useState('67758b0e2f3f34949e27d26f'); // Example admin ID

  const adminId = '67758b0e2f3f34949e27d26f';  // Replace with actual admin ID

  const [socket, setSocket] = useState(null);


  useEffect(() => {

      const socketInstance = io('http://localhost:8080');
      setSocket(socketInstance);

      socketInstance.on('connect', () => {
        console.log('User Connected to server');
        const roomName = `chatroom-${userId}-${adminId}`;
        socketInstance.emit('joinRoom', { userId, adminId });
        console.log(`User joined room: ${roomName}`);
      });

      socketInstance.on('adminMessage', (data) => {
        console.log('Received admin message:', data.message);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { user: 'Admin', message: data.message, timestamp: new Date().toISOString() },
        ]);
      });
  
      socketInstance.on('userMessage', (data) => {
        console.log('Received user message:', data.message);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { user: 'You', message: data.message, timestamp: new Date().toISOString() },
        ]);
      });

      fetchMessages()

      return () => {
        socketInstance.disconnect();
      };
  //  }
  }, [userId, adminId]);
  const handleJoinRoom = () => {
    if (socket) {
        const roomName = `chatroom-${userId}-${adminId}`;
        socket.emit('joinRoom', { userId, adminId });
        console.log(`User joined room: ${roomName}`);
    } else {
        console.error("Socket not connected yet.");
    }
};

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
      const roomName = `chatroom-${userId}-${adminId}`;
    socket.emit('userMessage', { messageData, roomName }); // 🔥 Emit to backend
      console.log("user message",messageData)
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: 'You', message: message, timestamp: new Date().toISOString() },
      ]);
      setMessage('');  // Clear the input field
    }
  };

  return (


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
                      {/* <FontAwesomeIcon icon={faCoffee} class="fa" size="3x" />
                      <label for="twitter"><i className="fa fa-utensils me-3 fa-2x "></i></label>
                      <input name="twitter" type="text" value="mikeross" />
                      <label for="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                      <input name="twitter" type="text" value="ross81" />
                      <label for="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                      <input name="twitter" type="text" value="mike.ross" /> */}
                    </div>
                  </div>
                </div>
                <div id="search">
                 <label for=""><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
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
                     <FontAwesomeIcon icon={faFacebook} className='m-2'/>
                                      <FontAwesomeIcon icon={faInstagram} className='m-2'/>
                                      <FontAwesomeIcon icon={faTwitter} className='m-2'/>
                  </div>
                </div>
                <div className="messages">
                  <ul>
                    {chatHistory.map((msg, index) => (
                      <li key={index} className={msg.user === 'You' ? 'sent' : 'received'}>
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                        <div>
                          <strong style={{ color: 'black' }}>{msg.user}: </strong>
                          <span style={{ color: 'black' }}>{msg.message}</span><br />
                          <small style={{ color: 'black' }}>{new Date(msg.timestamp).toLocaleTimeString()}</small>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="message-input">
                  <div className="wrap">
                    <input type="text" placeholder="Write your message..." value={message}
                      onChange={(e) => setMessage(e.target.value)} />
                     <FontAwesomeIcon icon={faMicrophone} />
                    <button onClick={sendUserMessage} className="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                  </div>
                </div>
              </div>
            </div>
    
          </div>


    // <div>
    //   {/* UI Layout as before */}
    //   <div>
    //     {chatHistory.map((msg, index) => (
    //       <div key={index}>
    //         <strong>{msg.user}: </strong>{msg.message}
    //         <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <input
    //     type="text"
    //     placeholder="Write your message..."
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //   />
    //   <button onClick={sendUserMessage}>Send</button>
    // </div>
  );
};

export default Userchat;
