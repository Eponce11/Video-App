import { useState } from "react";
import "./icon-input.css";

interface IconProps {
  children: any;
  placeHolder: string;
  type: string;
}

export function IconInput(props: IconProps) {
  const { children, placeHolder, type } = props;
  const [isdisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    if (e.target.value.trim().length < 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  return (
    <div className="icon-input__wrap">
      <div className="icon-input__icon-wrap">{children}</div>
      <input
        type={type}
        placeholder={placeHolder}
        className="icon-input__input"
        onChange={handleChanges}
      />

      {isdisabled ? (
        <a className="icon-input__joinButtonDisabled">Join</a>
      ) : (
        <a className="icon-input__joinButtonEnabled">Join</a>
      )}
    </div>
  );
}
