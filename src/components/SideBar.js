import {
  Clapperboard,
  Clock,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Music,
  Podcast,
  Radio,
  ShoppingBag,
  ThumbsUp,
  Trophy,
  UserCheck,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SideBar = () => {

  const isMenuOpen=useSelector((store=>store.app.isMenuOpen));
  if (!isMenuOpen) {
     return null;
  }
  

 
  return (
    <div className={`flex  flex-col w-[15%] p-4 top-14   text-wrap  fixed  left-[100%] h-dvh shadow-xl overflow-y-auto bg-gray-50  sidebar ${isMenuOpen ? 'open' : ''}`}>
      <ul className="flex flex-col w-full p-4 gap-4">
        <li className="flex items-center gap-4  hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Home />
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex items-center gap-4  hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M 15.886719 1 C 14.974131 1 14.077693 1.2286385 13.287109 1.65625 L 5.5664062 5.7207031 L 5.5664062 5.71875 C 3.7637541 6.6652034 2.6367187 8.5322799 2.6367188 10.566406 C 2.6367188 11.911504 3.2225585 13.082394 4.046875 14.046875 C 3.2161002 15.0216 2.6367187 16.195885 2.6367188 17.521484 C 2.6367188 20.532674 5.1018215 23 8.1132812 23 C 9.0303925 23 9.9287625 22.773103 10.716797 22.341797 L 18.292969 18.353516 L 18.259766 18.369141 C 20.151702 17.459981 21.363281 15.531898 21.363281 13.433594 C 21.363281 12.088496 20.777441 10.917606 19.953125 9.953125 C 20.783897 8.9783946 21.363281 7.8041153 21.363281 6.4785156 C 21.363281 3.4673258 18.898179 1 15.886719 1 z M 15.886719 3 C 17.813259 3 19.363281 4.5517054 19.363281 6.4785156 C 19.363281 7.5499776 18.888956 8.5222239 18.080078 9.1777344 L 17.121094 9.9550781 L 18.080078 10.732422 C 18.871608 11.373406 19.363281 12.344494 19.363281 13.433594 C 19.363281 14.75529 18.584642 15.993566 17.392578 16.566406 L 17.376953 16.574219 L 9.7636719 20.583984 L 9.7578125 20.587891 C 9.2778524 20.850605 8.6961702 21 8.1132812 21 C 6.1867412 21 4.6367188 19.448295 4.6367188 17.521484 C 4.6367188 16.450022 5.1110438 15.477776 5.9199219 14.822266 L 6.8789062 14.044922 L 5.9199219 13.267578 C 5.1283915 12.626594 4.6367188 11.655506 4.6367188 10.566406 C 4.6367188 9.266533 5.3427459 8.095781 6.4960938 7.4902344 L 6.4980469 7.4902344 L 14.232422 3.4179688 L 14.238281 3.4140625 C 14.729251 3.1482632 15.309951 3 15.886719 3 z M 10 9 L 10 15 L 15 12 L 10 9 z"></path>
          </svg>
          Shorts
        </li>
        <li className="flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <UserCheck />
          Subscriptions
        </li>
      </ul>
      <hr className="h-[0.5px] bg-black border-none opacity-20"/>
      <ul className="flex flex-col w-full p-4 gap-4">
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Library />
          Library
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <History />
          History
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Clock />
          Watch later
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <ThumbsUp />
          Liked videos
        </li>
      </ul>
      <hr className="h-[0.5px] mb-2 bg-black border-none opacity-20"/>
      <h2 className="m-0 p-0 font-medium text-wrap">Subscriptions</h2>
      <ul className="flex flex-col w-full p-4 gap-4">
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Music />
          Music
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Trophy />
         sports
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Gamepad2 />
          Gaming
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Clapperboard />
         Movies
        </li>
      </ul>
      <hr className="h-[0.5px] mb-2 bg-black border-none opacity-20"/>
      <h2 className="m-0 p-0 font-medium">Explore</h2>
      <ul className="flex flex-col w-full p-4 gap-4 mb-10">
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Flame />
          Trending
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <ShoppingBag />
         Shopping
        </li>
        <li className=" flex items-center gap-4   hover:shadow-inner p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Radio />
          Live
        </li>
        <li className=" flex items-center gap-4  p-2    hover:shadow-inner  hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <Podcast />
         Podcasts
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
