import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateRoomButton = () => {
  const navigate = useNavigate();

  const create = () => {
    const id = uuid();
    navigate(`/room/${id}`);
  };

  return <button onClick={create}>CreateRoomButton</button>;
};

export default CreateRoomButton;
