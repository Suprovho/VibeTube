import React, { useState } from "react";
import Reply from "./Reply";

const CommentBox = ({ comment, allComments, addComments, deleteComment }) => {
  const [reply, setReply] = useState(false);
  return (
    <div className="m-3 flex flex-col justify-start gap-2">
      <div className="flex flex-col justify-start gap-2">
        <span className="flex items-center gap-1">
          <img src={comment?.profile_img} className="w-8 rounded-full" alt="" />
          <p className="text-sm font-medium text-gray-800">{comment?.name}</p>
        </span>
        <p className="font-medium text-base text-[#212529]">{comment?.value}</p>
        <div className="flex gap-2">
          <button
            className="text-sm text-blue-600 font-medium"
            onClick={() => setReply(!reply)}
          >
            {!reply ? "Reply" : "Cancel"}
          </button>
          <button
            className="text-sm text-red-500 font-medium"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {reply && (
        <Reply
          setShowReply={setReply}
          addComments={addComments}
          id={comment.id}
        />
      )}
      <div className="nested-comments mb-4">
        {comment?.children?.map((childId) => {
          return (
            <CommentBox
              comment={allComments[childId]}
              allComments={allComments}
              key={childId}
              addComments={addComments}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
