import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react'
import { formatViewCount } from '../utils/constants';

const Comments =({ data }) => {
    const { username, text,avatar,like} = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          alt="user"
          src={avatar}
        />
        <div className="px-3">
          <p className="font-bold">{username}</p>
          <p>{text}</p>
          <p className='inline-flex gap-2 items-center'><ThumbsUp width={18} strokeWidth={1.5} className='cursor-pointer  hover:scale-y-110' /> {formatViewCount(like)} <ThumbsDown width={18} strokeWidth={1.5} className='cursor-pointer  hover:scale-y-110' /> </p>
        </div>
      </div>
    );
  };

export default Comments;