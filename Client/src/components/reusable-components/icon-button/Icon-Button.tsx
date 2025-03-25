import "./icon-button.css";

interface ButtonProps {
  icon: any;
  text: string;
}

export function IconButton(props: ButtonProps) {
  const { icon, text } = props;
  return (
    <div className="wrap">
      <button>
        {icon}
        {text}
      </button>
    </div>
  );
}
