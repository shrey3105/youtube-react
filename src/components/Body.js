import React from "react";
import ButtonList from "./ButtonList";
import VideoGallery from "./VideoGallery";

const Body = () => {
  return (
    <div className="flex-1">
      <ButtonList></ButtonList>
      <VideoGallery></VideoGallery>
    </div>
  );
};

export default Body;
