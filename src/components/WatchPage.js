import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import useChannelList from "../hooks/useChannelList";
import {
  convertToNumber,
  currentDateTime,
  formatViewCount,
  renderParagraphWithLinks,
} from "../utils/constants";
import { ArrowDownToLine, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import LiveChat from "./LiveChat";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const videoData = useSelector((store) => store?.videos?.videoData);
  const videoId = searchParams.get("v");
  const filterData = videoData.filter((data) => data?.id === videoId);
  const channelId = filterData[0]?.snippet?.channelId;
  useChannelList(channelId);

  const channelData = useSelector(
    (store) => store?.videos?.channelData[0] || null
  );
  const initialContent = renderParagraphWithLinks(
    filterData[0]?.snippet?.description
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    channelData && (
      <div className="flex flex-col md:flex-row w-full overflow-x-hidden">
        <div className="px-4 py-5 flex flex-col gap-4 md:w-[80%] mt-16">
          <iframe
            className="rounded-xl w-full md:w-[95%]"
            height="480"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?&autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="font-semibold text-xl text-wrap">
            {filterData[0]?.snippet?.title}
          </h1>
          <div className="gap-2 flex flex-wrap">
            <img
              src={channelData?.snippet?.thumbnails?.default?.url}
              alt="channel-logo"
              className="rounded-full w-11"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-[1.120rem] inline-flex items-center">
                {channelData?.snippet?.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill-opacity="0.65098"
                        fill="#000000"
                      ></circle>
                      <path
                        d="M22.491,30.69c-0.576,0 -1.152,-0.22 -1.591,-0.659l-6.083,-6.084c-0.879,-0.878 -0.879,-2.303 0,-3.182c0.878,-0.879 2.304,-0.879 3.182,0l6.083,6.084c0.879,0.878 0.879,2.303 0,3.182c-0.439,0.439 -1.015,0.659 -1.591,0.659z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M22.491,30.69c-0.576,0 -1.152,-0.22 -1.591,-0.659c-0.879,-0.878 -0.879,-2.303 0,-3.182l9.539,-9.539c0.878,-0.879 2.304,-0.879 3.182,0c0.879,0.878 0.879,2.303 0,3.182l-9.539,9.539c-0.439,0.439 -1.015,0.659 -1.591,0.659z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
              </h2>
              <p className="text-xs">
                {formatViewCount(channelData?.statistics.subscriberCount)}{" "}
                subscribers
              </p>
            </div>
            <div className="flex items-center justify-center ml-4 md:mr-48">
              <button className="bg-black text-white rounded-3xl p-4 h-9 text-center inline-flex items-center text-wrap font-semibold text-sm">
                Subscribe
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-2 md:justify-center mt-4">
              <button className="bg-gray-100 rounded-s-2xl p-1 h-9 text-sm font-semibold border-r border-solid border-gray-300 flex items-center justify-center">
                <ThumbsUp
                  className="mr-2 hover:stroke-green-500 hover:stroke-2"
                  width={20}
                  strokeWidth={1}
                />
                {formatViewCount(filterData[0]?.statistics?.likeCount)}
              </button>
              <button className="bg-gray-100 rounded-e-2xl p-2 h-9 text-sm font-semibold border-r border-solid border-gray-300 flex items-center justify-center">
                <ThumbsDown
                  width={20}
                  strokeWidth={1}
                  className="mr-2 hover:stroke-red-500 hover:stroke-2"
                />
              </button>
              <button className="ml-2 bg-gray-100 rounded-2xl p-2 text-sm font-semibold flex items-center justify-center hover:stroke-blue-500 hover:stroke-2">
                <Share2 width={20} strokeWidth={1.2} className="mr-2" />
                Share
              </button>
              <button className="md:visible invisible ml-2 bg-gray-100 rounded-2xl p-2 text-sm font-semibold flex items-center justify-center hover:stroke-black hover:stroke-2">
                <ArrowDownToLine
                  width={20}
                  strokeWidth={1.2}
                  className="mr-2"
                />
                Download
              </button>
            </div>
          </div>
          <div className=" bg-[#e5e5e5] p-4 items-start gap-1 text-wrap flex flex-col rounded-xl bg-opacity-50 overflow-hidden cursor-pointer hover:bg-[#e5e5e5]">
            <div className="flex gap-2">
              <p className="font-bold text-sm text-[#4b4b4b]">
                {convertToNumber(filterData[0]?.statistics?.viewCount)} views
              </p>
              <p className="font-bold text-sm text-[#4b4b4b]">
                {currentDateTime(filterData[0]?.snippet?.publishedAt)}
              </p>
            </div>
            {isExpanded ? (
              initialContent
            ) : (
              <p className="text-black text-[0.995]">
                {filterData[0]?.snippet.description.substring(0, 218)}
              </p>
            )}
            <button
              className="text-[#4b4b4b] -mt-1 hover:text-black focus:outline-none font-medium"
              onClick={toggleExpand}
            >
              {isExpanded ? "show less ..." : "more ..."}
            </button>
          </div>
          <div className="flex">
            <h1 className="text-black text-[1.32rem] px-1 mt-3 font-bold">
              Comments
            </h1>
          </div>
          <CommentSection />
        </div>
        <h1 className="md:invisible font-bold text-lg p-2">Live Chat</h1>
        <LiveChat />
      </div>
    )
  );
};

export default WatchPage;
