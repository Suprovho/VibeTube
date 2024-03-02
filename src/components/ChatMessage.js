
import React from "react";

const ChatMessage = ({ name, message,avatar }) => {
  return (
    <div className="flex-col justify-start items-center py-2 px-2 text-wrap shadow-sm">
      <div className="flex flex-wrap text-wrap">
        <img src={avatar} alt="logo" className="w-[9%]" />
        <span className="font-semibold px-2">{name}</span>
        <span className="text-sm">
          {message}
          <br />
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
