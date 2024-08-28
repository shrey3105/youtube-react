import React, { useEffect, useState } from "react";
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_VIDEO_SEARCH_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKey } from "../utils/searchSlice";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const searchKey = useSelector((store) => store.search.searchKey);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_VIDEO_SEARCH_API + searchKey);
    const json = await data.json();
    dispatch(setSearchKey(null));
    console.log("SearchResults", json.items);
    setVideos(json.items);
  };

  if (searchKey != null) {
    getSearchResults();
  }

  return (
    <div className="flex flex-wrap px-5 py-2">
      {videos.length > 0 &&
        videos.map((video) => (
          <VideoCard
            key={typeof video.id == "object" ? video.id.videoId : video.id}
            info={video}
          ></VideoCard>
        ))}
    </div>
  );
};

export default VideoGallery;
