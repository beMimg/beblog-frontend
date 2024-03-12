import Comment from "./Comment";

export default function Comments({ comments, post_id, setForceRerender }) {
  return (
    <div className="flex flex-col gap-10">
      {comments &&
        comments.map((comment) => (
          <Comment
            comment={comment}
            post_id={post_id}
            key={comment._id}
            setForceRerender={setForceRerender}
          />
        ))}
    </div>
  );
}
