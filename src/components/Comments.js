import React from "react";

const Comments = ({ data }) => {
  return (
    <div className="px-4 py-2 flex rounded-lg rounded-l-none border-l border-l-black">
      <img
        className="h-12 w-12"
        src="https://thumb.ac-illust.com/97/978945d4c2d83ce07f7369c787540196_w.jpeg"
      ></img>
      <div className="p-2">
        <p className="font-bold">{data.author}</p>
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default Comments;
