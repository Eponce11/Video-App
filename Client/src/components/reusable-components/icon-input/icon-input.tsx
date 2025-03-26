import "./icon-input.css";

interface IconProps {
  children: any;
  placeHolder: string;
  type: string;
}

export function IconInput(props: IconProps) {
  const { children, placeHolder, type } = props;
  return (
    <div className="icon-input__wrap">
      <div className="icon-input__icon-wrap">{children}</div>
      <input
        type={type}
        placeholder={placeHolder}
        className="icon-input__input"
      />
    </div>
  );
}
