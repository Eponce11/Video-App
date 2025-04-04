import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./messageSideBar.css";
import { BiSend } from "react-icons/bi";
import { motion } from "motion/react";

interface MessageSidebarProps {
  socketRef: any;
}

interface Message {
  msg: string;
  isMe: boolean;
}

const MessageSidebar = (props: MessageSidebarProps) => {
  const { socketRef } = props;

  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const { _roomID } = useParams();

  useEffect(() => {
    socketRef.current.on("msg-receive", (msg: string) => {
      const messageData: Message = {
        msg: msg,
        isMe: false,
      };
      setMessages((prev: Message[]) => [...prev, messageData]);
    });
  }, []);

  const handleSendMessage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!text) return;
    const payload = { msg: text, roomID: _roomID };
    socketRef.current.emit("send-msg", payload);

    const messageData = {
      msg: text,
      isMe: true,
    };

    setMessages((prev: Message[]) => [...prev, messageData]);
    setText("");
  };

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{ duration: 0.5 }}
      className="messageSidebarWrap"
    >
      <h3 className="mSBH3">In-call messages</h3>
      <div className="messagesSidebarMsgs">
        {messages.map((message: Message) => {
          return (
            <p>
              {message.isMe ? "Me" : "Other"}: {message.msg}
            </p>
          );
        })}
      </div>
      <div className="messageSidebarFooter">
        <input
          className="msgSBButInput"
          type="text"
          onChange={(e: any) => setText(e.target.value)}
          value={text}
          placeholder="Send a message"
        />
        <button className="msgSBButton" onClick={handleSendMessage}>
          <BiSend size={"24px"} />
        </button>
      </div>
    </motion.div>
  );
};

export default MessageSidebar;
