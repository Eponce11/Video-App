import { useRef } from "react";
import { io } from "socket.io-client";
import VideoStreamView from "../../components/VideoStreamView/VideoStreamView";
import MessageSidebar from "../../components/MessageSidebar/MessageSidebar";

const Room = () => {
  const socketRef = useRef<any>(null);
  socketRef.current = io("http://localhost:8000");

  return (
    <div>
      <VideoStreamView socketRef={socketRef} />
      <MessageSidebar socketRef={socketRef} />
    </div>
  );
};

export default Room;
