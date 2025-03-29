import { useState, useEffect, useRef } from "react";
import useLiveStream from "../../hooks/useLiveStream";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import MessageSidebar from "../../components/MessageSidebar/MessageSidebar";

const Room = () => {
  const socketRef = useRef<any>(null);
  socketRef.current = io("http://localhost:8000");
  const [userVideo, partnerVideo] = useLiveStream(socketRef);

  console.log("Hello");

  return (
    <div>
      <video autoPlay ref={userVideo} />
      <video autoPlay ref={partnerVideo} />
      <MessageSidebar socketRef={socketRef}/>
    </div>
  );
};

export default Room;
