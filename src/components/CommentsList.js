import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <div key={index} className="my-4">
            <Comments data={comment}></Comments>
            <div className="pl-5">
              <CommentsList comments={comment.nested_comments}></CommentsList>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;
