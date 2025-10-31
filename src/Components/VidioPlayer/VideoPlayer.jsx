import "./VideoPlayer.css";
import video from "../../assets/vidio/3680686-hd_1920_1080_25fps.mp4";
import { useRef } from "react";

export const VidioPlayer = ({ playVid, setPlayVid }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target == player.current) {
      setPlayVid(false);
    }
  };

  return (
    <div
      className={`vidioPlayer ${playVid ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};
