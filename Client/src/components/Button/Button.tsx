// component
import "./button.css";
interface ButtonProps {
  label: String;
}

const Button = (props: ButtonProps) => {
  const { label } = props;
  const test = {
    name: "Meater",
    age: 5,
    1: 6,
  };
  console.log(props);
  const { name } = test;

  return (
    <button className="button">
      {label}
      <div>hello world</div>
      <p></p>
    </button>
  );
};

export default Button;
