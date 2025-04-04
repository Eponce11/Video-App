import { useState } from "react";
import "./icon-button.css";

interface ButtonProps {
  icon?: any;
  text?: string;
  onCLick: any;
}

export function IconButton(props: ButtonProps) {
  const { icon, text, onCLick } = props;
  const [isdisabled, setIsDisabled] = useState(true);
  return (
    <button onClick={onCLick} className="icon-button__wrap">
      {icon}
      <div className="icon-button__text">{text}</div>
      {isdisabled ? (
        <div className="icon-button__dropdownMenuWrap"></div>
      ) : (
        <div />
      )}
    </button>
  );
}
