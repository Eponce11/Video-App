import { useState } from "react";
import "./emoteButton.css";
import { motion } from "motion/react";

interface emoteButtonProps {
  emote: string;
}

function EmoteButton(props: emoteButtonProps) {
  const { emote } = props;

  const [tempComponent, setTempComponent] = useState([<div />]);

  const handleButtonClick = () => {
    const left = Math.floor(Math.random() * (0 - 200));
    setTempComponent(
      tempComponent.concat(
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -700 }}
          transition={{ duration: 3 }}
          style={{ position: "absolute", left: left }}
          key={Date.now()}
        >
          {emote}
        </motion.div>
      )
    );
    const index = tempComponent.length;
    setTimeout(() => {
      if (tempComponent.length < 5) {
        setTempComponent((oldValues) => {
          return oldValues.filter((_, i) => i !== index);
        });
        setTempComponent((oldValues) => {
          return oldValues.filter((_, i) => i !== index - 1);
        });
        setTempComponent((oldValues) => {
          return oldValues.filter((_, i) => i !== index - 2);
        });
      } else {
        const tempArray = [<div />];

        setTempComponent(tempArray);
      }
    }, 3000); // Component disappears after 3 seconds
  };

  return (
    <div>
      <button className="roomButton3" onClick={handleButtonClick}>
        {emote}
      </button>
      <div className="tempEmoteAnimtated">{tempComponent}</div>
    </div>
  );
}

export default EmoteButton;
