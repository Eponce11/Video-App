import Button from "../../components/Button/Button";
import Meeting_Block from "../../components/meeting-block/Meeting-Block";
import "./home.css";
const Home = () => {
  return (
    <div className="container">
      {/* <Button label={"Meater"} /> */}
      <Meeting_Block />
    </div>
  );
};

export default Home;
