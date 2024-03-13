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

  // function getImgSrc(post) {
  //   const imgData = Buffer.from(post.img.data).toString("base64");
  //   const imgSrc = `data:${post.img.contentType};base64,${imgData}`;

  //   return imgSrc;
  // }

  return (
    <Link
      to={`/posts/${post._id}`}
      key={post._id}
      className=" relative grid h-36 max-w-[400px] grid-cols-10 rounded-xl  border border-blue-500 p-2.5 shadow-md md:h-56 lg:h-72 lg:max-w-full"
    >
      <div
        // src={getImgSrc(post)}
        className="col-span-4 rounded-md bg-pink-200 md:col-span-5 lg:col-span-4"
      ></div>
      <div className="col-span-6 flex flex-col justify-between p-1 md:col-span-5 lg:col-span-6 lg:p-7">
        <h1 className="w-full font-medium lg:text-xl ">{post.title}</h1>
        <div className="flex flex-row justify-between">
          <p className="reverseTheme w-min self-center rounded-md bg-gray-700 px-6 text-center text-sm">
            {post.topic}
          </p>
          <div className="flex flex-row items-center gap-[2px] opacity-60">
            <FaRegComment />
            <p className="text-md">{count}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-md font-light opacity-80">
            {post.author.username}
          </p>
          <p className="text-sm opacity-40">{post.formated_date}</p>
        </div>
      </div>
    </Link>
  );
}
