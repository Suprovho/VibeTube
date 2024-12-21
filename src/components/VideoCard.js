import React from "react";
import { formatViewCount } from "../utils/constants";
import Shimmer from "./Shimmer";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  if (!info) {
    return <Shimmer />;
  }
  return (
<div className="p-2 m-2 w-full flex flex-wrap text-wrap justify-center md:justify-start">
  <div className="flex flex-col w-[90%] sm:w-[300px] md:w-[270px] flex-wrap">
    <img
      className="rounded-lg w-full object-cover"
      src={thumbnails.medium.url}
      alt="thumbnail"
    />

    <h2 className="text-base sm:text-lg font-medium py-2 line-clamp-2">
      {title}
    </h2>
    <p className="text-sm text-gray-700 truncate">{channelTitle}</p>
    <p className="text-sm text-gray-600">
      {formatViewCount(statistics.viewCount)} views
    </p>
  </div>
</div>
  );
};

export default VideoCard;
