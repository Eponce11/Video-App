import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface MessageSidebarProps {
  socketRef: any;
}

const MessageSidebar = (props: MessageSidebarProps) => {
  const { socketRef } = props;

  const [message, setMessage] = useState<string>("");
  const { _roomID } = useParams();

  useEffect(() => {
    socketRef.current.on("msg-receive", (msg: string) => {
      console.log(msg);
    });
  }, []);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    const payload = { msg: message, roomID: _roomID };
    socketRef.current.emit("send-msg", payload);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e: any) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default MessageSidebar;
