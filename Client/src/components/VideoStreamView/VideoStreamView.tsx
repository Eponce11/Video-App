import useLiveStream from "../../hooks/useLiveStream";

interface VideoStreamViewProps {
  socketRef: any;
}

const VideoStreamView = (props: VideoStreamViewProps) => {
  const { socketRef } = props;

  const [userVideo, partnerVideo] = useLiveStream(socketRef);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video autoPlay ref={userVideo} />
      <video autoPlay ref={partnerVideo} />
    </div>
  );
};

export default VideoStreamView;
