import React, { useEffect, useState } from "react";
import { currentDateTime, formatViewCount } from "../utils/constants";
import { BadgeCheck } from "lucide-react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const ResultCard = ({ info }) => {
  const [thumbnails, setThumbnails] = useState(null);
  const data = useSelector((vid) => vid.videos?.videoData);
  const ChannelData = useSelector((vid) => vid?.videos?.channelData);

  const currentVideoData = data?.find(
    (video) => video?.id === info?.id?.videoId
  );

  useEffect(() => {
    if (ChannelData && info?.snippet?.channelId) {
      const timerId = setTimeout(() => {
        const channelThumbnails = ChannelData?.find(
          (video) => video?.id === info.snippet.channelId
        );
        setThumbnails(channelThumbnails);
      }, 300);

      return () => clearTimeout(timerId);
    }
  }, [ChannelData, info?.snippet?.channelId]);

  if (!info || !data || !ChannelData) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col gap-4 w-full overflow-x-hidden sm:flex-row">
    <img
      src={info.snippet?.thumbnails?.medium?.url}
      alt="thumbnail"
      className="w-[100%] sm:w-[25%] rounded-xl"
    />

    <div className="w-[100%] sm:w-[75%]">
      <h1 className="text-lg font-normal pb-1">{info.snippet?.title}</h1>
      <div className="flex text-xs gap-2 pb-4 font-normal text-[#6d6d6d]">
        <p>
          {currentVideoData && formatViewCount(currentVideoData?.statistics?.viewCount)}{" "}
          views .
        </p>
        <p>{currentDateTime(info.snippet?.publishedAt)}</p>
      </div>
      <div className="flex md:gap-2 gap-1 items-center text-[0.80rem] font-medium text-[#6d6d6d] md:pb-6">
        {thumbnails?.snippet?.thumbnails?.default?.url && (
          <img
            src={thumbnails.snippet.thumbnails.default.url}
            alt="Channel-logo"
            className="w-6 rounded-full"
          />
        )}
        <p>{info.snippet?.channelTitle}</p>
        <BadgeCheck width={18} className="stroke-white fill-gray-500" />
      </div>
      <p className="text-xs md:font-medium md:visible invisible text-[#6d6d6d]">
        {info.snippet?.description}
      </p>
    </div>
  </div>
  
  );
};

export default ResultCard;
