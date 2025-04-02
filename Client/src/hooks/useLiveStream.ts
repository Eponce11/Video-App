import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const useLiveStream = (socketRef: any) => {
  const { _roomID } = useParams();

  const userVideo = useRef<any>(null);
  const partnerVideo = useRef<any>(null);
  const peerRef = useRef<any>(null);
  const otherUser = useRef<any>(null);
  const userStream = useRef<any>(null);

  useEffect(() => {
    // Get access to the stream audio and video
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream: any) => {
        userVideo.current.srcObject = stream;
        userStream.current = stream;

        socketRef.current.emit("join room", _roomID);

        socketRef.current.on("other user", (userID: any) => {
          callUser(userID);
          otherUser.current = userID;
        });

        socketRef.current.on("user joined", (userID: any) => {
          otherUser.current = userID;
        });

        socketRef.current.on("offer", handleReceiveCall);

        socketRef.current.on("answer", handleAnswer);

        socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
      });
  }, []);

  const callUser = (userID: any) => {
    peerRef.current = createPeer(userID);
    userStream.current
      .getTracks()
      .forEach((track: any) =>
        peerRef.current.addTrack(track, userStream.current)
      );
  };

  const createPeer = (userID?: any) => {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org",
        },
        {
          urls: "turn:numb.viagenie.ca",
          credential: "muazkh",
          username: "webrtc@live.com",
        },
      ],
    });

    peer.onicecandidate = handleICECandidateEvent;
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

    return peer;
  };

  const handleNegotiationNeededEvent = (userID: any) => {
    peerRef.current
      .createOffer()
      .then((offer: any) => {
        return peerRef.current.setLocalDescription(offer);
      })
      .then(() => {
        const payload = {
          target: userID,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit("offer", payload);
      })
      .catch((e: any) => console.log(e));
  };

  const handleReceiveCall = (incoming: any) => {
    peerRef.current = createPeer();
    const desc = new RTCSessionDescription(incoming.sdp);
    peerRef.current
      .setRemoteDescription(desc)
      .then(() => {
        userStream.current
          .getTracks()
          .forEach((track: any) =>
            peerRef.current.addTrack(track, userStream.current)
          );
      })
      .then(() => {
        return peerRef.current.createAnswer();
      })
      .then((answer: any) => {
        return peerRef.current.setLocalDescription(answer);
      })
      .then(() => {
        const payload = {
          target: incoming.caller,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit("answer", payload);
      });
  };

  const handleAnswer = (message: any) => {
    const desc = new RTCSessionDescription(message.sdp);
    peerRef.current
      .setRemoteDescription(desc)
      .catch((e: any) => console.log(e));
  };

  const handleICECandidateEvent = (e: any) => {
    if (e.candidate) {
      const payload = {
        target: otherUser.current,
        candidate: e.candidate,
      };
      socketRef.current.emit("ice-candidate", payload);
    }
  };

  const handleNewICECandidateMsg = (incoming: any) => {
    const candidate = new RTCIceCandidate(incoming);
    peerRef.current
      .addIceCandidate(candidate)
      .catch((e: any) => console.log(e));
  };

  const handleTrackEvent = (e: any) => {
    partnerVideo.current.srcObject = e.streams[0];
  };

  return [userVideo, partnerVideo];
};

export default useLiveStream;
