import React from "react";
import { formatViewCount } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2  w-full flex  flex-wrap text-wrap">
      <div className="flex flex-col w-[270px] flex-wrap">
        <img
          className="rounded-lg w-full "
          src={thumbnails.medium.url}
          alt="thumbnail"
        />

        <h2 className="text-lg font-medium py-2">{title}</h2>
        <p className="text-sm">{channelTitle}</p>
        <p className="text-sm">{formatViewCount(statistics.viewCount)} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
