import useLiveStream from "../../hooks/useLiveStream";
const Room = () => {
  const [userVideo, partnerVideo] = useLiveStream();

  return (
    <div>
      <video autoPlay ref={userVideo} />
      <video autoPlay ref={partnerVideo} />
    </div>
  );
};

export default Room;
