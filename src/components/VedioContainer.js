import React, { useEffect, useState } from "react";
import {
  getRandomRegionId,
  GOOGLE_API_KEY,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideoData } from "../utils/store/videoSlice";


//todo: build on click up component.

const VedioContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


const getVideos = async (regionCode='IN') => {
    console.log(regionCode);
    
    setIsLoading(true);
    try {
      const data = await fetch(
         `${YOUTUBE_VIDEOS_API}&regionCode=${regionCode}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setVideos((prev) => [...prev, ...json.items]);
      dispatch(getVideoData([...videos,...json.items]));
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handelScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      !isLoading
    ) {
      const random = getRandomRegionId();
      getVideos(random);
    } else return;
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll); //TODO: doc.
  }, [isLoading]);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
