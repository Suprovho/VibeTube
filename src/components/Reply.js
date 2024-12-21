import React, { useState } from "react";

const Reply = ({setShowReply,addComments,id}) => {
  const [reply, setReply] = useState("");
  const handlePostReply = () => {
    addComments(reply,id)
    setReply("");
    setShowReply(false);
  };
  return (
    <div>
      <textarea
        className="reply-textarea"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write your reply here..."
      ></textarea>
      <button className="post-reply-btn" onClick={handlePostReply}>
        Post Reply
      </button>
    </div>
  );
};

export default Reply;
