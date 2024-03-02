import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoData } from "../utils/store/videoSlice";


const VedioContainer = () => {

  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(getVideoData(json.items));
    setVideos(json.items);
    
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link  key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  info={video}  />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
