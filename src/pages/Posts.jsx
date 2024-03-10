import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function getSmallerText(text) {
  return text.slice(0, 100) + "...";
}

export default function Posts() {
  const [data, setData] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        setData(response.data);
      } catch (err) {
        return;
      }
    };
    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-10 p-4 ">
      <h1 className=" pt-4 text-xl font-semibold">DISCOVER OUR LATEST POSTS</h1>
      {data &&
        data.posts.map((post) => (
          <Link
            to={`/posts/${post._id}`}
            key={post._id}
            className=" relative flex max-w-[500px] flex-col  bg-slate-200  py-6 text-black shadow-xl "
          >
            <h1 className="px-4 pb-4 text-lg font-medium">{post.title}</h1>
            {/* image in future */}
            <div className="h-40 w-full  bg-blue-500"></div>
            <div className="flex flex-col gap-2 px-4 pt-4 font-normal">
              <p className=" text-medium">{getSmallerText(post.text)}</p>
              <div>
                <div className="flex flex-row gap-1 ">
                  <h2 className=" font-light">Written by: </h2>
                  <h2 className="font-medium">{post.author.username}</h2>
                </div>
                <p>{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
