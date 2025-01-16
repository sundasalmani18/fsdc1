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



    socket.on('videoCallRequest', (data) => {
      const { userId } = data;
      // Handle incoming video call request (e.g., prompt admin to accept/reject)
      console.log(`User ${userId} wants to start a video call`);
      // Call function to display accept/reject dialog for video call
      setIncomingCall(data);
    });

    socket.on('videoCallOffer', (offerData) => {
      const { offer, userId } = offerData;
      handleVideoCallOffer(offer, userId);
    });

    socket.on('videoCallAnswer', (answerData) => {
      const { answer, userId } = answerData;
      handleVideoCallAnswer(answer, userId);
    });

    socket.on('iceCandidate', (candidateData) => {
      const { candidate } = candidateData;
      if (peerConnectionRef.current) {
        peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
      }
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
      socket.off('videoCallRequest');
      socket.off('videoCallOffer');
      socket.off('videoCallAnswer');
      socket.off('iceCandidate');
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



  // WebRTC setup: Get user media (video and audio)
  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localStreamRef.current = stream;
      localVideoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  // Handle incoming video call offer
  const handleVideoCallOffer = async (offer, userId) => {
    try {
      const peerConnection = new RTCPeerConnection();
      peerConnectionRef.current = peerConnection;

      // Add local stream to the peer connection
      localStreamRef.current.getTracks().forEach(track => peerConnection.addTrack(track, localStreamRef.current));

      // Set up the ICE candidate handling
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit('iceCandidate', { candidate: event.candidate, targetId: userId });
        }
      };

      // Handle incoming remote stream
      peerConnection.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      // Set the remote description (offer) received from the user
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));

      // Create and send answer
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);

      socket.emit('videoCallAnswer', { answer, userId, adminId });
    } catch (error) {
      console.error('Error handling video call offer:', error);
    }
  };

  // Handle the answer from the user
  const handleVideoCallAnswer = async (answer, userId) => {
    try {
      if (answer) {
        // If the user accepts, establish the connection
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(answer));
      } else {
        console.log('User rejected the video call');
      }
    } catch (error) {
      console.error('Error handling video call answer:', error);
    }
  };

  // Start a video call (triggered by admin or user)
  const startVideoCall = (userId) => {
    getUserMedia();
    socket.emit('videoCallRequest', { userId });
    setIsVideoCallActive(true); // Video call has started
  };


  const stopVideoCall = () => {
    // Stop the video tracks and close the peer connection
    const tracks = localStreamRef.current.getTracks();
    tracks.forEach(track => track.stop());
    peerConnectionRef.current.close();
   
    localVideoRef.current.srcObject = null;
    remoteVideoRef.current.srcObject = null;
    setIsVideoCallActive(false); // End the video call
  };

  const acceptVideoCall = () => {
    socket.emit('videoCallAnswer', { answer: true, userId: incomingCall.userId, adminId });
    setIncomingCall(null); // Reset incoming call after accepting
    setIsVideoCallActive(true); // Video call accepted
  };

  const rejectVideoCall = () => {
    socket.emit('videoCallAnswer', { answer: false, userId: incomingCall.userId, adminId });
    setIncomingCall(null); // Reset incoming call after rejecting
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
      <div className="container">
        <div className="d-flex justify-content-center m-3">
          <h3 className="align-center">Admin Support Chat System</h3>
        </div>

        {notifications.map((notification, index) => (
          <p key={index}>{notification}</p>
        ))}



        <div className="d-flex">
          {/* Sidebar for Users */}
          <div
            className="sidebar"
            style={{
              width: '25%',
              padding: '10px',
              backgroundColor: '#3BA1EE ',
              height: '100vh',
              // overflowY: 'scroll',
              borderRight: '2px solid #3BA1EE ',
            }}
          >
            <h5>Users</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {users.map((user) => (

                <button
                  key={user.id}
                  onClick={() => handleUserSelect(user._id)}

                  style={{
                    padding: '10px',
                    backgroundColor: userId === user.id ? '#3BA1EE ' : '#3BA1EE ',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {user.username}
                </button>
              ))}
            </div>
          </div>


          <div id="messages">
            {console.log('chatMessages', chatMessages)}

            {/* console.log('Message:', message); */}

            {/* {sortedMessages.map((message, index) => {

              //  Directly use message.user and message.message for rendering
              const text = message.message;  // Get the message content
              const role = message.user;     // Get the user (or admin) role
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
                  {`${role}: ${text}`}
                </div>
              );
            }

            )} */}

            {sortedMessages.map((message, index) => {
              const { user: role, message: text } = message; // Destructure to get role and text
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                  {/* Admin Message */}
                  {role === 'Admin' && (
                    <div className="msg-left" style={{ alignSelf: 'flex-start' }}>
                      <div id="notifications">
                        {`${role}: ${text}`}
                      </div>
                    </div>
                  )}

                  {/* User Message */}
                  {role !== 'Admin' && (
                    <div className="msg-right" style={{ alignSelf: 'flex-end' }}>
                      <div id="chat" >
                        {`${role}: ${text}`}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}


            <div className="video-call-container">
              <video ref={localVideoRef} id="localVideo" autoplay muted />
              <video ref={remoteVideoRef} id="remoteVideo" autoplay />
            </div>

           { incomingCall && (
              <div className="video-call-notification">
                <p>User {incomingCall.userId} is calling you</p>
                <button onClick={acceptVideoCall}>Accept</button>
                <button onClick={rejectVideoCall}>Reject</button>
              </div>
            )}

{isVideoCallActive && (
              <button onClick={stopVideoCall} className="btn btn-danger">
                Stop Video Call
              </button>
            )}


            <div className="input-group mb-3">
              <input type="text" className="form-control"
                id="adminMessageInput"
                placeholder="Type a message to the user"
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={sendAdminMessage}>Submit</button>

              </div>
            </div>
            {!isVideoCallActive && (
              <button onClick={() => startVideoCall(userId)} className="btn btn-success">
                Start Video Call
              </button>
            )}

                      </div>


        </div>

      </div>
    
    </>
  );
};


export default Adminchat

