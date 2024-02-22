import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import useChannelList from "../hooks/useChannelList";

const SearchResults = () => {
  //TODO: search api call , build result page .. after exammm..

  const [SearchData, setSearchData] = useState([]);
  const [isComponentMounted, setComponentMounted] = useState(true);

  const SearchResult = useSelector((store) => store.app.SearchMenu);
  const SearchButtonClicked = useSelector(
    (store) => store.app.isSearchbuttonPressed
  );

  const Results = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        SearchResult +"&type=video"+
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchData(json.items);
  };

  useEffect(() => {
    // ?This block will be executed only when the component mounts or reload...

    if (isComponentMounted) {
      Results();
      setComponentMounted(!isComponentMounted);
    } else {
      // This block will be executed on button click of search
      SearchButtonClicked && Results();
    }
  }, [SearchButtonClicked, isComponentMounted]);

  const videoIds = SearchData.filter(
    (video) => video.id.videoId !== undefined && video.id.videoId !== null
  ).map((video) => video.id.videoId);
  useVideos(videoIds);

  const channelIds = SearchData.filter(
    (video) =>
      video.snippet.channelId !== undefined && video.snippet.channelId !== null
  ).map((video) => video.snippet.channelId);

  useChannelList(channelIds);

  return (
    <div className="mt-16 p-2 flex flex-col gap-3  w-full">
      {SearchData.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <ResultCard key={video.snippet.channelId} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
