import "./enable-button.css";

interface enablebutton__props {
  text: string;
}

export function EnableButton(props: enablebutton__props) {
  const { text } = props;
  return <button className="enable-button">{text}</button>;
}
