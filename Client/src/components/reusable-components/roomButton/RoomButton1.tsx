import ".//roomButton1.css";

interface RoomButton1Props {
  icon: any;
  onClick?: any;
}

const RoomButton1 = (props: RoomButton1Props) => {
  const { icon, onClick } = props;
  return (
    <button onClick={onClick} className="RoomButton1">
      {icon}
    </button>
  );
};

export default RoomButton1;
