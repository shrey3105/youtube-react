import React, { useEffect } from "react";
import { closeMenu } from "../utils/menuSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
    console.log(searchParams.get("v"));
  }, []);
  return (
    <>
      <div className="flex-1 p-8">
        <div className="flex">
          <iframe
            className="w-3/4 h-[500px] pr-5"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <LiveChat></LiveChat>
        </div>

        <CommentsContainer></CommentsContainer>
      </div>
    </>
  );
};

export default WatchVideo;
