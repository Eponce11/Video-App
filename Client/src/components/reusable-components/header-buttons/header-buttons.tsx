import "./header-buttons.css";

interface ButtonProps {
  icon: any;
  onClick?: any;
  href?: string;
}

export function HeaderButton(props: ButtonProps) {
  const { icon, onClick, href } = props;
  return (
    <a
      target="_blank"
      href={href}
      onClick={onClick}
      className="headerButton__wrap"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
