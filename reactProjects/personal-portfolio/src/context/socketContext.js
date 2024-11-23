import React, { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

// Create a Socket context
const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

// SocketProvider to manage socket connection
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:3000'); // Adjust URL to your server
    setSocket(socket);

    // Clean up socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
