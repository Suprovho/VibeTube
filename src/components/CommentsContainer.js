import React from 'react'
import Comments from './Comments'
import { commentsData } from '../utils/mockData/Comments'



const CommentsList=({comments})=>{
  if (!comments) {
    return null; // Add a check for undefined or null comments
  }

   return comments.map((comment)=>(
     <div key={comment.id} className=''>
      <div className='mt-5'>
      <Comments data={comment} />
      </div>
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} /> 
      </div>
     </div>

   ))
}

const CommentsContainer = () => {
  return (
    <div  className="flex flex-col">
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer