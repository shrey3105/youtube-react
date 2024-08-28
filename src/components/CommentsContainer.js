import React from "react";
import { COMMENTS_DATA } from "../utils/constants";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="my-5">
      <h2 className="text-3xl font-bold">Comments:</h2>
      <CommentsList comments={COMMENTS_DATA}></CommentsList>
    </div>
  );
};

export default CommentsContainer;
