import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

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

    });



  

    // fetchMessages();
    fetchUsers();
    // Clean up the socket connection when the component unmounts
    return () => {

      socket.off('connect');
      socket.off('adminNotification');
      socket.off('userMessage');
      socket.off('adminMessage');
      socket.off('disconnect');
    
    };
  }, []);



  // Fetch messages based on userId
  const fetchMessages = async (selectedUserId) => {
    if (!selectedUserId) {
      console.error('User ID is missing or invalid');
      return; // Return early if no userId
    }

    console.log('Fetching messages for user ID:', selectedUserId);

    try {
      const response = await axios.get(`http://localhost:8080/message/${selectedUserId}`);
      console.log('Fetched messages:', response.data);  // Log fetched messages
      setChatMessages(response.data);  // Set chat messages state
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




  // Check if the timestamps are in correct format first
  chatMessages.forEach(message => {
    console.log(message);  // Log entire message object
    console.log(message.user);  // Log just the 'user' field
    console.log(message.message);
  });
  // Ensure timestamps are properly converted to Date objects
  const sortedMessages = [...chatMessages].sort((a, b) => {
    const dateA = a.timestamp ? Date.parse(a.timestamp) : NaN;  // If timestamp is invalid, assign NaN
    const dateB = b.timestamp ? Date.parse(b.timestamp) : NaN;  // If timestamp is invalid, assign NaN

    // Log the parsed date to ensure correct parsing
    console.log("Date A:", dateA, "Date B:", dateB);

    // Sorting by timestamp in ascending order (oldest first)
    return dateA - dateB;
  });





  return (
    <>
<div className='body'>
<div id="frame" >
	<div id="sidepanel">
		<div id="profile">
			<div className="wrap">
				<img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
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
					<label for="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
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
         
          
					<div className="wrap"   key={user.id}  onClick={() => handleUserSelect(user._id)}>
         
						<span className="contact-status online"></span>
						<img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
						<div className="meta">
           	<p className="name">   {user.username}</p>
							
						</div>
					</div>
         
				</li>
          ))}
				<li className="contact active">
					<div className="wrap">
						<span className="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<div className="meta">
							<p className="name">Harvey Specter</p>
							<p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
						</div>
					</div>
				</li>

			</ul>
		</div>
		<div id="bottom-bar">
			<button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
			<button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
		</div>
	</div>
	<div className="content">
		<div className="contact-profile">
			<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
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
              const { user: role, message: text } = message; // Destructure to get role and text
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                  {/* Admin Message */}
                  {role === 'Admin' && (


<li className="sent">
					<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          {`${role}: ${text}`}
				</li>
                   
                  )}

                  {/* User Message */}
                  {role !== 'Admin' && (
                  <li className="replies">
                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                  {`${role}: ${text}`}
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
                onChange={(e) => setAdminMessage(e.target.value)}/>
			<i className="fa fa-paperclip attachment" aria-hidden="true"></i>
			<button  onClick={sendAdminMessage} className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
</div>

  </div>























     
    
    </>
  );
};


export default Adminchat

