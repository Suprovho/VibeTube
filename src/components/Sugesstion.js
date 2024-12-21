import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { GOOGLE_API_KEY,YOUTUBE_VIDEOS_API2 } from "../utils/constants";

const Sugesstion = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVideos = async (regionCode = "IN") => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `${YOUTUBE_VIDEOS_API2}&regionCode=${regionCode}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);


  return (
    <div className="flex flex-col md:mt-4 items-center">
    {videos.map((video) => (
      <Link key={video.id.videoId} to={"/watch?v=" + video.id}>
        <VideoCard info={video} />
      </Link>
    ))}
  </div>
  );
};

export default Sugesstion;
