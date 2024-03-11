import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

export default function CommentSection({ post_id }) {
  const [comments, setComments] = useState();
  const [forceRerender, setForceRerender] = useState(1);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts/${post_id}/comments`,
        );
        setComments(response.data.comments);
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
  }, [forceRerender]);

  return (
    comments && (
      <div className="p-4">
        <div className="relative">
          <h1>Comments</h1>
          <p className="reverseTheme absolute left-[90px] top-[-2px] rounded-full p-0.5 text-xs">
            {comments.length}
          </p>
        </div>
        <div className="mb-4">
          <CommentForm post_id={post_id} setForceRerender={setForceRerender} />
        </div>
        <Comments comments={comments} />
      </div>
    )
  );
}
