import "./header-buttons.css";

interface ButtonProps {
  icon: any;
  onClick?: any;
}

export function HeaderButton(props: ButtonProps) {
  const { icon, onClick } = props;
  return (
    <button onClick={onClick} className="headerButton__wrap">
      {icon}
    </button>
  );
}
