import "./icon_text_input_field.css";

interface IconProps {
  children: any;
  placeHolder: string;
  type: string;
}

export function IconInput(props: IconProps) {
  const { children, placeHolder, type } = props;
  return (
    <div className="wrap">
      <div className="icon-wrap">{children}</div>
      <input type={type} placeholder={placeHolder} />
    </div>
  );
}
