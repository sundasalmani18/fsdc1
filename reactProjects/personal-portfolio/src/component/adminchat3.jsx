import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Adminchat = () => {
  const [adminMessage, setAdminMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userId, setUserId] = useState('user123');
  const [adminId, setAdminId] = useState(localStorage.getItem('userId'));
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);



  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const [isCalling, setIsCalling] = useState(false);
  // Ensure this matches your backend

  // On component mount, set up socket events
  useEffect(() => {
    const socketInstance = io('http://localhost:8080');
    setSocket(socketInstance)

    socketInstance.on('connect', () => {
      console.log('Admin Connected to server');
      const roomName = `chatroom-${userId}-${adminId}`;
      socketInstance.emit('joinRoom', { userId, adminId });
      console.log(`User joined room: ${roomName}`);
      setSocketConnected(true);  // Update state when socket is connected
    });
    console.log(socketConnected, "socket connect")


    // socketInstance.on('userMessage', (data) => {
    //   console.log("user message", data)
    //   if (data.userId === userId) { // Ensure the message is for the selected user
    //     console.log("userId", userId)
    //     setChatMessages((prevMessages) => [
    //       ...prevMessages,
    //       { user: 'User', message: data.message, timestamp: new Date().toLocaleTimeString() }
    //     ]);
    //   }
    // });


    socketInstance.on('userMessage', (data) => {
      console.log(" User message received:", data);

      if (data.senderId === userId) {
        console.log(" Matched senderId:", userId);

        setChatMessages((prevMessages) => {
          const updatedMessages = [
            ...prevMessages,
            { user: 'User', message: data.message, timestamp: new Date().toLocaleTimeString() }
          ];
          console.log(" Updated chatMessages state:", updatedMessages);
          return updatedMessages;
        });
      }
    });

    socketInstance.on('adminMessage', (data) => {
      console.log("admin message", data)
      if (data.userId === userId) { // Ensure the message is for the selected user
        console.log("user Id", userId)
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { user: 'Admin', message: data.message, timestamp: new Date().toLocaleTimeString() }
        ]);
      }
    });



    socketInstance.on("offer", async ({ offer, sender }) => {
      console.log("Received offer from:", sender);
      peerConnectionRef.current = createPeerConnection(sender);
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));

      const answer = await peerConnectionRef.current.createAnswer();
      await peerConnectionRef.current.setLocalDescription(answer);

      socketInstance.emit("answer", { target: sender, answer });
    });

    socketInstance.on("answer", async ({ answer }) => {
      console.log("Received answer");
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socketInstance.on("ice-candidate", async ({ candidate }) => {
      console.log("Received ICE candidate");
      await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
    });


    // Clean up socket event listeners
    return () => {

      socketInstance.off('connect');
      socketInstance.off('userMessage');
      socketInstance.off('adminMessage');
    };
  }, [userId]);


  const startCall = async () => {
    setIsCalling(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    peerConnectionRef.current = createPeerConnection(socket.id);
    stream.getTracks().forEach((track) => peerConnectionRef.current.addTrack(track, stream));

    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);

    socket.emit("offer", { target: "other-user-id", sender: socket.id, offer });
  };

  const createPeerConnection = (target) => {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });

    pc.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { target, candidate: event.candidate });
      }
    };

    return pc;
  };



  useEffect(() => {
    console.log("🔄 Chat messages updated:", chatMessages);
  }, [chatMessages]);

  const handleUserSelect = (selectedUserId) => {
    setUserId(selectedUserId);
    setChatMessages([]);  // Clear previous chat messages
    fetchMessages(selectedUserId);

    console.log({ socket, socketConnected })

    // Check if socket is initialized
    if (socket && socketConnected) {
      const roomName = `chatroom-${selectedUserId}-${adminId}`;
      socket.emit('joinRoom', { userId: selectedUserId, adminId });
      console.log(`Joined room: ${roomName}`);
    } else {
      console.error("Socket is not initialized yet.");
    }

  };
  useEffect(() => {
    fetchMessages(userId);
    fetchUsers() // Fetch messages when component mounts or user changes
  }, []);



  //   useEffect(() => {
  //   console.log("Socket Connected:", socketConnected);
  // }, [socketConnected]);

  //   useEffect(() => {
  //     if (chatMessages.length > 0) {
  //       console.log('Chat messages updated:', chatMessages);
  //       // Optionally, trigger additional logic when messages are updated
  //     }
  //   }, [chatMessages]);
  // Fetch list of users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/user');
      setUsers(response.data);

      // Automatically select the first user (if any users are available)
      if (response.data.length > 0) {
        const firstUser = response.data[0];
        handleUserSelect(firstUser._id);
      }

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


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



  // Handle user selection
  // const handleUserSelect = (selectedUserId) => {
  //   setUserId(selectedUserId);
  //   fetchMessages(selectedUserId); 
  //   // Emit an event to join a specific room (based on adminId and userId)
  //   const roomName = `chatroom-${selectedUserId}-${adminId}`;
  //   socket.emit('startChat', { userId: selectedUserId, adminId }); // Emit to server to handle room logic
  //   console.log(`Joined room: ${roomName}`);
  // };





  // Send admin message
  // const sendAdminMessage = () => {
  //   if (adminMessage.trim() !== '') {
  //     const messageData = {
  //       user: 'Admin',
  //       userId: userId,  // User's ID, make sure this is defined
  //       adminId: adminId,  // Admin's ID, make sure this is defined

  //       message: adminMessage,
  //       timestamp: new Date().toISOString(),
  //     };
  //     socket.emit('adminMessage', messageData);
  //     setChatMessages((prev) => [
  //       ...prev,
  //       { user: 'Admin', message: adminMessage, timestamp: new Date().toISOString() }
  //     ]);
  //     setAdminMessage('');
  //   }
  // };

  const sendAdminMessage = () => {
    if (adminMessage.trim() !== '') {
      const messageData = {
        user: 'Admin',
        userId: userId,  // User's ID
        adminId: adminId,  // Admin's ID
        message: adminMessage,
        timestamp: new Date().toISOString(),
      };

      console.log('messageData Admin', messageData)

      const roomName = `chatroom-${userId}-${adminId}`; // Room where user is
      socket.emit('adminMessage', { messageData, roomName });

      // Optionally, display the message in the UI
      setChatMessages((prev) => [
        ...prev,
        { user: 'Admin', message: adminMessage, timestamp: new Date().toISOString() }
      ]);

      setAdminMessage('');
    }
  };



  return (

    <div className='body'>
      <div id="frame" >
        <div id="sidepanel">
          <div id="profile">
            <div className="wrap">
              <img id="profile-img" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="online" alt="" />
              <p>Chat System</p>
              {/* <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i> */}
              <div id="status-options">
                <ul>
                  <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                  <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                  <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                  <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                </ul>
              </div>
              <div id="expanded">
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
                      <FontAwesomeIcon icon={faCoffee} className="fa-2" />
                      <input name="twitter" type="text" value="mikeross" />
                      <FontAwesomeIcon icon="fa-brands fa-facebook" />
                      <input name="twitter" type="text" value="ross81" />
                      <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
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
              <FontAwesomeIcon icon={faFacebook} className='m-2' />
              <FontAwesomeIcon icon={faInstagram} className='m-2' />
              <FontAwesomeIcon icon={faTwitter} className='m-2' />
            </div>
          </div>
          <div className="messages">
            <ul>
              {chatMessages.map((msg, index) => (
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
              <input type="text" placeholder="Write your message..." value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)} />
              <FontAwesomeIcon icon={faMicrophone} />
              <button onClick={ sendAdminMessage } className="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
              {/* <video ref={localVideoRef} autoPlay playsInline />
              <video ref={remoteVideoRef} autoPlay playsInline />
              <button onClick={startCall} disabled={isCalling}  ><FontAwesomeIcon icon={faVideo} /></button> */}
            </div>
          </div>
        </div>

      </div>

    </div>











    // <div className="body">
    //   <div id="frame">
    //     <div id="sidepanel">
    //       {/* Profile and user list */}
    //       <div id="contacts">
    //         <ul>
    //           {users.map((user) => (
    //             <li className="contact" key={user._id} onClick={() => handleUserSelect(user._id)}>
    //               <div className="wrap">
    //                 <span className="contact-status online"></span>
    //                 <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
    //                 <div className="meta">
    //                   <p className="name">{user.username}</p>
    //                 </div>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="content">
    //       <div className="contact-profile">
    //         <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
    //         <p>Chat with: {userId}</p>
    //       </div>

    //       <div className="messages">
    //         <ul>
    //           {chatMessages.map((message, index) => {
    //             console.log(chatMessages, "chat message")
    //             const { user, message: text, timestamp } = message;
    //             return (
    //               <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
    //                 {user === 'Admin' ? (
    //                   <li className="sent">
    //                     <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
    //                     {`${user}: ${text}`}
    //                     <br />
    //                     <span style={{ color: 'black' }} className="timestamp">{timestamp}</span>
    //                   </li>
    //                 ) : (
    //                   <li className="replies">
    //                     <img src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" alt="" />
    //                     {`${user}: ${text}`}
    //                     <br />
    //                     <span style={{ color: 'black' }} className="timestamp">{timestamp}</span>
    //                   </li>
    //                 )}
    //               </div>
    //             );
    //           })}
    //         </ul>
    //       </div>

    //       <div className="message-input">
    //         <div className="wrap">
    //           <input
    //             type="text"
    //             placeholder="Write your message..."
    //             value={adminMessage}
    //             onChange={(e) => setAdminMessage(e.target.value)}
    //           />
    //           <button onClick={sendAdminMessage} className="submit">
    //             <i className="fa-solid fa-paper-plane fa-2x"></i>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Adminchat;
