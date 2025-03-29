import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {messages.map((message: Message) => {
        return (
          <p>
            {message.isMe ? "Me" : "Other"}: {message.msg}
          </p>
        );
      })}

      <input
        type="text"
        onChange={(e: any) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default MessageSidebar;
