import { VscSmiley } from "react-icons/vsc";
import { TbSquareRoundedArrowUp } from "react-icons/tb";
import { FaRegClosedCaptioning } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiHandOpen } from "react-icons/tfi";
import { MdCallEnd } from "react-icons/md";
import "./roomButtons.css";
import { UseLiveDate } from "../../../hooks/uselivedate";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineLockPerson } from "react-icons/md";
import { useState } from "react";
import { BsMicMute } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillCameraVideoOffFill } from "react-icons/bs";

interface roomButtonsProps {
  chatButtonOnClick: any;
}

const RoomButtons = (props: roomButtonsProps) => {
  const { chatButtonOnClick } = props;
  const now = UseLiveDate();
  const hour = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() < 12 ? "AM" : "PM";

  const [micDisabled, setMicDisabled] = useState(false);
  const [vidDisabled, setVidDisabled] = useState(false);

  function micDisabledFunc() {
    setMicDisabled(!micDisabled);
  }
  function vidDisabledFunc() {
    setVidDisabled(!vidDisabled);
  }
  return (
    <div className="roomButtonsWrap">
      <section className="roomButtonsSections1">
        <div className="currentTime">
          {hour}:{minute} {ampm}
        </div>
      </section>

      <section className="roomButtonsSections2">
        {micDisabled ? (
          <button onClick={micDisabledFunc} className="leaveCall">
            <BsMicMute size={"24px"} />
          </button>
        ) : (
          <button onClick={micDisabledFunc} className="roomButton1">
            <BsFillMicFill size={"24px"} />
          </button>
        )}

        {vidDisabled ? (
          <button onClick={vidDisabledFunc} className="leaveCall">
            <BsFillCameraVideoOffFill size={"24px"} />
          </button>
        ) : (
          <button onClick={vidDisabledFunc} className="roomButton1">
            <BsFillCameraVideoFill size={"24px"} />
          </button>
        )}

        <button className="roomButton1">
          <FaRegClosedCaptioning size={"24px"} />
        </button>
        <button className="roomButton1">
          <VscSmiley size={"24px"} />
        </button>
        <button className="roomButton1">
          <TbSquareRoundedArrowUp size={"24px"} />
        </button>
        <button className="roomButton1">
          <TfiHandOpen size={"24px"} />
        </button>
        <button className="roomButton2">
          <BsThreeDotsVertical size={"24px"} />
        </button>
        <button className="leaveCall">
          <MdCallEnd size={"24px"} />
        </button>
      </section>

      <section className="roomButtonsSections3">
        <button className="roomButton3">
          <IoIosInformationCircleOutline size={"24px"} />
        </button>
        <button className="roomButton3">
          <MdOutlinePeopleAlt size={"24px"} />
        </button>
        <button onClick={chatButtonOnClick} className="roomButton3">
          <MdMessage size={"24px"} />
        </button>
        <button className="roomButton3">
          <BsGrid3X3GapFill size={"24px"} />
        </button>
        <button className="roomButton3">
          <MdOutlineLockPerson size={"24px"} />
        </button>
      </section>
    </div>
  );
};

export default RoomButtons;
