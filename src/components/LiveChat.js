import { ChevronDown, SendHorizontal, Smile, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/ChatSlice";
import { LiveChats } from "../utils/mockData/LiveChat";
import EmojiPicker from "emoji-picker-react";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [EmojiPickers, setEmojiPicker] = useState(false);
  const dispatch = useDispatch();
  const ChatMesg = useSelector((store) => store.chat.message);
  // API Polling..
  useEffect(() => {
    let index = 0;

    const addMessageWithDelay = () => {
      dispatch(addMessage([LiveChats[index]]));
      index = (index + 1) % LiveChats.length; // start from 0 again..
    };

    const i = setInterval(addMessageWithDelay, 2000);

    return () => clearInterval(i);
  }, []);

  if (!ChatMesg) {
    return null; // Add a check for undefined or null comments
  }

  return (
    <div className="flex flex-col w-[30%] text-wrap flex-wrap">
      <div className="w-full mt-[88px] mr-4 h-[480px] border-[#e4e4e4] border-2  rounded-lg shadow-md  text-wrap flex-wrap overflow-y-scroll">
        <h1 className="border-b-2 border-[#e4e4e4] p-4 inline-flex items-center w-full text-[17px] bg-white shadow-sm sticky top-0">
          Top chat <ChevronDown strokeWidth={1} />
        </h1>
        <div>
          {ChatMesg.map((c, i) => (
            <ChatMessage
              key={i}
              name={c.name}
              message={c.message}
              avatar={c.avatar}
            />
          ))}
        </div>
      </div>
      <form
        className="p-2 w-full  border-[#e4e4e4] border-2  rounded-lg shadow-md "
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage([
              {
                name: "Suprovho",
                message: liveMessage,
                avatar:
                  "https://robohash.org/inventoresapienteea.png?size=50x50&set=set1",
              },
            ])
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-[75%] mr-4 p-1 px-2 bg-[#e5e5e5] rounded-full outline-none hover:bg-opacity-50"
          placeholder="Chat..."
        />
        <p
          className="inline cursor-pointer"
          onClick={(e) => {
            setEmojiPicker(!EmojiPickers);
            e.preventDefault();

          }}
        >
          {EmojiPickers?<X className="inline-flex items-center mr-4" strokeWidth={1.5} />:<Smile strokeWidth={1.5} className="inline-flex items-center mr-4" />}
        </p>
        <button className="">
          <SendHorizontal
            className="inline-flex items-center"
            strokeWidth={1.5}
          />
        </button>
      </form>
      <EmojiPicker
        open={EmojiPickers}
        onEmojiClick={(emojiObject) => {
          setLiveMessage(liveMessage + emojiObject.emoji);
          setEmojiPicker(!EmojiPickers);
        }}
        className="absolute z-20"
      />
    </div>
  );
};

export default LiveChat;
