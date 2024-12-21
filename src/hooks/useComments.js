import { useState } from "react";

export default function useComments(commentsData) {
  const [comments, setComments] = useState(commentsData.comments);

  const addComments = (value, parentId = null) => {
    const newId = Date.now();
    const newComment = {
      id: newId,
      parentId: parentId,
      value: value,
      children: [],
      name: "guest",
      profile_img: "https://randomuser.me/api/portraits/lego/5.jpg",
    };
    setComments((prevComment) => {
      const updatedComment = { ...prevComment, [newId]: newComment };
      parentId && updatedComment[parentId].children.push(newId); // if parentID is not null means child node.
      return updatedComment;
    });
  };

  const deleteComment = (id) => {
    const parentId = comments[id].parentId;
    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      if (parentId) {
        updatedComments[parentId].children = updatedComments[
          parentId
        ].children.filter((childId) => {
          return childId !== id;
        });
      }
      // to remove the descendants
      const queue = [id];
      while (queue.length > 0) {
        const nodeToDelete = queue.shift();
        queue.push(...updatedComments[nodeToDelete].children);

        delete updatedComments[nodeToDelete];
      }
      return updatedComments;
    });
  };

  return { comments, deleteComment, addComments };
}
