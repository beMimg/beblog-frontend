import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Loading from "./Loading";
import api_domain from "../functions/api_domain";
import { useUser } from "../context/userProvider";

export default function CommentSection({ post_id }) {
  const [comments, setComments] = useState();
  const [forceRerender, setForceRerender] = useState(1);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const { user } = useUser();

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `${api_domain}api/posts/${post_id}/comments`,
        );
        setComments(response.data.comments);
        return;
      } catch (err) {
        setError("Apologies, there was an issue retrieving the comments");
        return;
      } finally {
        setIsLoading(false);
        return;
      }
    };
    getComments();
  }, [forceRerender]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    comments && (
      <div className="animate-fade-in p-4">
        <div className="relative flex flex-col pl-1">
          <h1>Comments</h1>
          <p className="reverseTheme absolute left-[90px] top-[-2px] rounded-full p-0.5 text-xs">
            {comments.length}
          </p>
        </div>

        <div className="mb-10">
          {user ? (
            <CommentForm
              post_id={post_id}
              setForceRerender={setForceRerender}
            />
          ) : (
            <h3 className="text-md pt-3 text-center font-medium text-gray-500">
              If you want to comment, please log in.
            </h3>
          )}
        </div>

        {comments.length === 0 ? (
          <p className="pl-2">Be the first to comment</p>
        ) : (
          <Comments
            comments={comments}
            post_id={post_id}
            setForceRerender={setForceRerender}
          />
        )}
      </div>
    )
  );
}
