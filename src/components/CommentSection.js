import React, { useState } from "react";
import CommentBox from "./CommentBox";
import commentsData from "../utils/mockData/comment.json";
import useComments from "../hooks/useComments";

const CommentSection = () => {
  const { comments, addComments, deleteComment } = useComments(commentsData);
  const [text, setText] = useState("");

  const renderComments = (commentId) => {
    const comment = comments[commentId];
    if (!comment) return null;
    return (
      <CommentBox
        key={comment.id}
        comment={comment}
        allComments={comments}
        addComments={addComments}
        deleteComment={deleteComment}
      />
    );
  };

  return (
    <div className="p-4 rounded-md h-auto bg-[#F3F4F6]">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          placeholder="Write a comment"
          onChange={(e) => setText(e.target.value)}
          className="md:w-[40%] w-full p-1"
        />
        <button
          onClick={() => addComments(text)}
          className="border-2 border-solid border-black p-1 rounded-md hover:text-white hover:bg-gray-900 transition-all"
        >
          Submit
        </button>
      </div>
      <div className="mt-4">
        {Object.values(comments)
          .filter((comment) => comment.parentId === null) 
          .map((rootComment) => renderComments(rootComment.id))}
      </div>
    </div>
  );
};

export default CommentSection;
