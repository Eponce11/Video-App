import { useRef, useState } from "react";
import "./room.css";
import { io } from "socket.io-client";
import VideoStreamView from "../../components/VideoStreamView/VideoStreamView";
import MessageSidebar from "../../components/MessageSidebar/MessageSidebar";
import RoomButtons from "../../components/Room/roomButtons/roomButtons";
const Room = () => {
  const socketRef = useRef<any>(null);
  socketRef.current = io("http://localhost:8000");
  const [chatShut, setChatShut] = useState(true);

  function setChatBlock() {
    {
      chatShut ? setChatShut(false) : setChatShut(true);
    }
  }
  return (
    <div className="roomWrap">
      <section className="vidMsgWrap">
        <article className="roomVideoWrap">
          <VideoStreamView socketRef={socketRef} />
        </article>

        <aside className="roomMessageSidebar">
          {chatShut ? <div /> : <MessageSidebar socketRef={socketRef} />}
        </aside>
      </section>

      <RoomButtons chatButtonOnClick={setChatBlock} />
    </div>
  );
};

export default Room;
