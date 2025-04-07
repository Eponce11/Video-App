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
import EmoteButton from "../../reusable-components/emoteButton/emoteButton";
import { MdFullscreen } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { MdTroubleshoot } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { PiHandPalmLight } from "react-icons/pi";

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
  const [emoteBarDisabled, setEmoteBarDisabled] = useState(true);
  const [handUpDisabled, setHandUpDisabled] = useState(true);
  const [threeDotsDisabled, setThreeDotsDisabled] = useState(true);

  function micDisabledFunc() {
    setMicDisabled(!micDisabled);
  }
  function vidDisabledFunc() {
    setVidDisabled(!vidDisabled);
  }
  function emoteBarDisabledFunc() {
    setEmoteBarDisabled(!emoteBarDisabled);
  }
  function threeDotsDisabledFunc() {
    setThreeDotsDisabled(!threeDotsDisabled);
  }
  function handUpDisabledFunc() {
    setHandUpDisabled(!handUpDisabled);
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
        <div>
          <button onClick={emoteBarDisabledFunc} className="roomButton1">
            <VscSmiley size={"24px"} />
          </button>
          {emoteBarDisabled ? null : (
            <div className="emoteBar">
              <EmoteButton emote="&#128512;" />
              <EmoteButton emote="&#128513;" />
              <EmoteButton emote="&#128514;" />
              <EmoteButton emote="&#128515;" />
              <EmoteButton emote="&#128516;" />
              <EmoteButton emote="&#128517;" />
              <EmoteButton emote="&#128511;" />
              <EmoteButton emote="&#128509;" />
              <EmoteButton emote="&#128508;" />
              <EmoteButton emote="&#129421;" />
            </div>
          )}
        </div>
        <button className="roomButton1">
          <TbSquareRoundedArrowUp size={"24px"} />
        </button>
        <button onClick={handUpDisabledFunc} className="roomButton1">
          <TfiHandOpen size={"24px"} />
        </button>
        {handUpDisabled ? null : (
          <div className="handUpBlock">
            <PiHandPalmLight />
            Me
          </div>
        )}
        <button onClick={threeDotsDisabledFunc} className="roomButton2">
          <BsThreeDotsVertical size={"24px"} />
        </button>
        {threeDotsDisabled ? null : (
          <div className="threeDotsMenu">
            <button className="roomButton4">
              <MdFullscreen size={"30px"} /> Full Screen
            </button>
            <a
              href="https://support.google.com/websearch/answer/6223687?hl=en&co=GENIE.Platform%3DAndroid"
              className="roomButton4"
            >
              <VscReport size={"24px"} /> Report a Problem
            </a>
            <a
              href="https://support.google.com/legal/answer/2463296?hl=en"
              className="roomButton4"
            >
              <MdOutlineReportGmailerrorred size={"24px"} /> Report Abuse
            </a>
            <a href="https://support.google.com/" className="roomButton4">
              <MdTroubleshoot size={"24px"} /> Trouble Shooting & Help
            </a>
            <a
              href="https://support.google.com/accounts/answer/3118621?hl=en"
              className="roomButton4"
            >
              <MdOutlineSettings size={"24px"} /> Settings
            </a>
          </div>
        )}
        <a href="/" className="leaveCall">
          <MdCallEnd size={"24px"} />
        </a>
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
