import "./icon-button.css";

interface ButtonProps {
  icon: any;
  text: string;
}

export function IconButton(props: ButtonProps) {
  const { icon, text } = props;
  return (
    <button className="icon-button__wrap">
      {icon}
      <div className="icon-button__text">{text}</div>
    </button>
  );
}
