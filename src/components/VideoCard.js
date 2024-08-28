import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ info }) => {
  const navigate = useNavigate();

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const { url } = snippet.thumbnails.medium;
  //console.log("Info", info.id);

  const watchVideo = () => {
    typeof info.id == "object"
      ? navigate("/watch?v=" + info.id.videoId)
      : navigate("/watch?v=" + info.id);
  };

  return (
    <div className="w-[25%] p-3 cursor-pointer" onClick={watchVideo}>
      <div className="shadow-md rounded-lg h-full p-2">
        <img alt="thumbnail" src={url}></img>
        <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
        <h4>{channelTitle}</h4>
        <p>{statistics && statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
