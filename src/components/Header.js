import React, { useEffect, useState } from "react";
import { CircleUserRound, Menu, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCall, setSearchName, toggleMenu } from "../utils/store/appSlice";
import { YOUTUBE_SEARCH_API, logo } from "../utils/constants";
import { CacheResults } from "../utils/store/SearchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll); //* handleSCroll an event handler that gets called whenever the user scrolls the div.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    //API call
    //make a api call after every key press but
    //if the difference between two api calls is less < 200ms
    //decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]); //! it is using caching also..
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * *debouncing--
   *
   * *key-i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * ? if we don't return clearTimeout then if we press key within 200ms reconciliation will take place it will destroy the component or rerender and it will create a new  setTimeout again and already previous one is there so multiple api calls   will be made so to handel it while rerender take place it will return a clear setTimeout function which will clear the previous setTimeout and new setTimeout will be called..
   *
   * *key-ip
   * - destroy the component (use effect return method)
   * - re render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * ? if user doesn't press any key within 200ms then api call will be made other wise the above process will take place
   *
   * ! setTimeOut(200)=>make api call
   *
   */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      CacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const selectItem = (item) => {
    setSearchQuery(item);
    setShowSuggestions(false);
  };

  dispatch(setSearchName(searchQuery));

  const handleButtonClick = () => {
    setTimeout(() => {
      // Navigate to the "Results" page
      navigate("/Results");
    }, 200);
     dispatch(setSearchCall())
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`${
        isSticky ? "bg-white shadow-md" : "bg-white"
      } transition-all duration-75 ease-in-out fixed top-0 left-0 right-0 z-50 flex items-center justify-between  p-2  box-border w-full`}
    >
      <div className="flex items-center flex-shrink-0 gap-5 min-w-[20%]">
        <Menu
          className="max-w-full cursor-pointer"
          onClick={() => toggleMenuHandler()}
          absoluteStrokeWidth={true}
        />
        <Link to={"/"} >
        <img
          src={logo}
          alt="YTlogo"
          className="w-[20%] cursor-pointer"
        />
        </Link>
      </div>
      <div className="flex  w-full justify-start items-center -translate-x-20">
        <input
          type="text"
          className="w-[60%] p-[8px] pr-10 text-black outline-blue-500 rounded-s-3xl bg-white  invisible md:visible placeholder:pl-2 placeholder:text-black border-2 border-solid border-gray-200 "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            //*allowing time for click events on the suggestions list to trigger. This ensures that selecting an item from the list works properly.
            setTimeout(() => setShowSuggestions(false), 250);
          }}
          onKeyDown={(e) => {
            // Hide suggestions when Enter key is pressed
            if (e.key === "Enter") setShowSuggestions(false);
          }}
        />
        {searchQuery && (
          <button
            className="absolute inline-flex w-[3%] top-0 right-0 left-[56%] mt-2 mr-2 text-gray-500 bg-transparent "
            onClick={() => setSearchQuery("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <button
          className="rounded-e-2xl p-2 bg-opacity-5  bg-[#222222] hover:bg-gray-200  text-white border-s-0 border-e-2 border-t-2  border-b-2 border-solid border-gray-200"
          onClick={handleButtonClick}
        >
          <Search
            className="block m-auto stroke-[1]"
            color="black"
            StrokeWidth={true}
          />
        </button>
      </div>
      {showSuggestions && (
        <div className="z-20 fixed inline-flex items-center justify-start   top-[61px] border-2 border-solid border-gray-100 rounded-lg left-[32.7%]  bg-white py-2 px-5 w-[35%] shadow-2xl">
          <ul className="flex flex-col gap-4 items-start justify-start pb-4 w-full text-wrap text-[#4b4b4b] font-medium cursor-pointer">
            {suggestions
              .filter((item) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((s) => (
                <li
                  key={s}
                  className="w-full p-1 hover:bg-gray-100 justify-start inline-flex items-start rounded-md"
                  onClick={() => selectItem(s)}
                >
                  {s}
                  <Search
                    className=" mr-3 m-auto stroke-[1]"
                    size={20}
                    color="black"
                    StrokeWidth={true}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap items-center justify-start cursor-pointer">
        <CircleUserRound size={35} color="#45a1ff" />
      </div>
    </div>
  );
};

export default Header;
