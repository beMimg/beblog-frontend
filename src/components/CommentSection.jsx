import axios from "axios";
import { useEffect, useState } from "react";

export default function CommentSection({ post_id }) {
  const [comments, setComments] = useState();

  console.log(post_id);
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
  }, []);

  console.log(comments);
  return (
    comments && (
      <div className="p-4">
        <div className="relative">
          <h1>Comments</h1>
          <p className="reverseTheme absolute left-[90px] top-[-2px] rounded-full p-0.5 text-xs">
            {comments.length}
          </p>
        </div>
      </div>
    )
  );
}
