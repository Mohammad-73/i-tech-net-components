import React, { useState, useRef } from "react";
import videoSrc from "../../assets/SurfcampPortugal/Angebote-3er/Atlantic-Coast-Surfcamp-Santa-Cruz-Portugal.jpg";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = ({ title, description }) => {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVisible(false);
    } else {
      videoRef.current.pause();
      setIsVisible(true);
    }
  };

  const handleShowPlay = () => {
    if (videoRef.current.paused === false) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-5">
      <div className="flex flex-col items-center">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
          <p className="text-[1rem] text-[#2B2D42]">{description}</p>
        </div>
        <div className="relative w-[852px] h-[445px] border-1 border-emerald-800">
          <div className="absolute top-0 right-0 w-[103px] h-[103px] bg-[#12A3BA] rounded-[20px]"></div>
          <div className="absolute bottom-0 left-0 w-[172px] h-[172px] bg-[#FF9F1C] rounded-[20px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[802px] h-[405px] rounded-[20px]">
            <video
              ref={videoRef}
              className="rounded-[20px]"
              width="100%"
              controls
              onClick={handleShowPlay}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
              Your browser does not support HTML video.
            </video>
          </div>
          <div
            onClick={handlePlayPause}
            className={`${
              isVisible ? "visible" : "hidden"
            } cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-custom-white backdrop-blur rounded-full w-[84px] h-[84px]`}
          >
            <div className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#12A3BA]  rounded-full w-[52px] h-[52px]">
              <FaPlay
                className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                size={26}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;