import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Adminchat = () => {

  const [adminMessage, setAdminMessage] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [isAdminOnline, setIsAdminOnline] = useState(true); // Track if admin is online
  const [userId, setUserId] = useState('user123'); // Example user ID
  const [adminId, setAdminId] = useState(localStorage.getItem('userId')); // Example admin ID
  const [users, setUsers] = useState([]); // State to store the list of users
  const [incomingCall, setIncomingCall] = useState(null)
  const [isVideoCallActive, setIsVideoCallActive] = useState(false); // To track video call status


  // WebRTC references
  const localVideoRef = useRef(null); // Local video stream
  const remoteVideoRef = useRef(null); // Remote video stream
  const peerConnectionRef = useRef(null); // Peer connection reference
  const localStreamRef = useRef(null); // Local media stream reference

  // Initialize the socket connection
  const socket = io('http://localhost:8080'); // Ensure this matches your server's URL and port

  useEffect(() => {
    socket.on('connect', () => { console.log('Admin Connected to server'); });
    socket.on('adminNotification', (data) => {
      setNotifications(prev => [...prev, `New message from: ${data.name} (${data.email}): ${data.message}`]);
    });
    socket.on('userMessage', (message) => {
      const messageWithTimestamp = {
        user: 'User',
        message: message.text,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages(prev => [...prev, messageWithTimestamp]);
    });
   
    socket.on('adminMessage', (data) => {
      const messageWithTimestamp = { user: data.user, message: data.message, timestamp: data.timestamp || new Date().toLocaleTimeString() };
      setChatMessages(prev => [...prev, messageWithTimestamp]);
    });
  
    
    fetchUsers();
    socket.on('disconnect', () => { console.log('Admin disconnected from server'); });
  
    return () => {
      socket.off('connect');
      socket.off('adminNotification');
      socket.off('userMessage');
      socket.off('adminMessage');
      socket.off('disconnect');
    };
  }, []);



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

  // Fetch list of users from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Handle user selection for chatting
  const handleUserSelect = (selectedUserId) => {
    console.log('Selected user ID:', selectedUserId); // Log the selected userId to verify
    setUserId(selectedUserId);
    fetchMessages(selectedUserId); // Optionally, fetch the selected user's message history
  };


  const sendAdminMessage = () => {
    if (adminMessage.trim() !== '') {
      const messageData = {
        user: 'Admin',
        senderId: adminId,
        receiverId: userId,
        message: adminMessage,
        timestamp: new Date().toISOString(),
      };
      socket.emit('adminMessage', messageData);
      setChatMessages(prev => [...prev, { user: 'Admin', message: adminMessage, timestamp: new Date().toISOString() }]);
      setAdminMessage('');
    }
  };




  // Check if the timestamps are in correct format first
  chatMessages.forEach(message => {
    console.log("1",message);  // Log entire message object
    console.log("2",message.user);  // Log just the 'user' field
    console.log("3",message.message);
  });
  // Ensure timestamps are properly converted to Date objects
  // const sortedMessages = [...chatMessages].sort((a, b) => {
  //   const dateA = a.timestamp ? Date.parse(a.timestamp) : NaN;  // If timestamp is invalid, assign NaN
  //   const dateB = b.timestamp ? Date.parse(b.timestamp) : NaN;  // If timestamp is invalid, assign NaN

  //   // Log the parsed date to ensure correct parsing
  //   console.log("Date A:", dateA, "Date B:", dateB);

  //   // Sorting by timestamp in ascending order (oldest first)
  //   return dateA - dateB;
  // });

  const sortedMessages = [...chatMessages].sort((a, b) => {
    const dateA = a.timestamp ? Date.parse(a.timestamp) : new Date().getTime();  // Use current time if invalid
    const dateB = b.timestamp ? Date.parse(b.timestamp) : new Date().getTime();  // Use current time if invalid
  
    console.log("Date A:", dateA, "Date B:", dateB);  // Debug to see what's being parsed
  
    // Sort messages by their timestamps
    return dateA - dateB;
  });
  
  


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
              <ul>


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

              </ul>
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
                {sortedMessages.map((message, index) => {
                  const { user: role, message: text ,timestamp:time } = message; // Destructure to get role and text
                  // {console.log("messagess ",message)}
                  return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                      {/* Admin Message */}
                      {role === 'Admin' && (


                        <li className="sent">
                          <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                          {`${role}: ${text}`}
                        <br/>  <span  style={{ color: 'black' }} className="timestamp">{time}</span>
                        </li>

                      )}

                      {/* User Message */}
                      {role !== 'Admin' && (
                        <li className="replies">
                          <img src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" alt="" />
                          {`${role}: ${text}`}
                          <br/>  <span  style={{ color: 'black' }} className="timestamp">{time}</span>
                        </li>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="message-input">
              <div className="wrap">
                <input type="text" placeholder="Write your message..." value={adminMessage}
                  onChange={(e) => setAdminMessage(e.target.value)} />
                <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                <button onClick={sendAdminMessage} className="submit"><i class="fa-solid fa-paper-plane fa-2x"></i></button>
              </div>
            </div>
          </div>
        </div>

      </div>

























    </>
  );
};


export default Adminchat

