import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../reusable-components/icon-button/Icon-Button";
import { MdOutlineVideoCameraFront } from "react-icons/md";

const CreateRoomButton = () => {
  const navigate = useNavigate();

  const create = () => {
    const id = uuid();
    navigate(`/room/${id}`);
  };
  return (
    <IconButton
      icon={<MdOutlineVideoCameraFront size={"20px"} />}
      text={"New Meeting"}
      onCLick={create}
    />
  );
  // return <button onClick={create}>CreateRoomButton</button>;
};

export default CreateRoomButton;
