import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa6";

export default function PostCard({ post }) {
  const [count, setCount] = useState();

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts/${post._id}/comments/count`,
        );
        setCount(response.data.commentsCount);
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
  }, []);

  return (
    <Link
      to={`/posts/${post._id}`}
      key={post._id}
      className="animate-fade-in reverseTheme relative flex h-36 w-full grid-cols-10 flex-row justify-between rounded-md p-4 shadow-md transition-all hover:scale-105 md:h-40 lg:max-w-full"
    >
      <div className="flex flex-col justify-between">
        <h1 className="w-full font-medium lg:text-xl ">{post.title}</h1>
        <p className="themeModalButton self-center rounded-md px-6 text-center text-xs font-semibold">
          {post.topic}
        </p>
        <p className="text-md font-light opacity-80">{post.author.username}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between self-end">
          <div className="flex flex-row items-center gap-[2px] opacity-60">
            <FaRegComment />
            <p className="text-md">{count}</p>
          </div>
        </div>
        <p className="text-sm opacity-40">{post.formated_date}</p>
      </div>
    </Link>
  );
}
