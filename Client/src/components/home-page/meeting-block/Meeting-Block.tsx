import "./Meeting-Block.css";
import { FaRegKeyboard } from "react-icons/fa6";
import { IconInput } from "../../reusable-components/icon-input/icon-input";
import "../../CreateRoomButton/CreateRoomButton";
import CreateRoomButton from "../../CreateRoomButton/CreateRoomButton";

// for keyboard Icon in icon input

const Meeting_Block = () => {
  return (
    <section>
      <h2>Video calls and meetings for everyone</h2>

      <h3>
        Connect, collaborate, and celebrate from anywhere with Google Meet
      </h3>
      <div className="Meeting-block__buttons">
        {/* <IconButton
          icon={<MdOutlineVideoCameraFront size={"20px"} />}
          text={"New Meeting"}
        /> */}
        <CreateRoomButton />
        <IconInput
          children={
            <FaRegKeyboard
              size={"20px"}
              strokeWidth={10}
              color="rgb(85, 85, 85)"
            />
          }
          placeHolder={"Enter a Code Or Link"}
          type={"text"}
        />
        {/* <button className="enable-button">Join</button> */}
      </div>

      <p className="meeting-block__learn-more">
        <a
          href="https://support.google.com/meet/?hl=en#topic=14074839"
          className="learn-more"
        >
          Learn More
        </a>
        about Google Meet
      </p>
    </section>
  );
};

export default Meeting_Block;
