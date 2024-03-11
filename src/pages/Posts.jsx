import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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

  console.log(data);
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <h1 className=" pl-2 pt-4 text-xl font-semibold">
        Discover our latest posts
      </h1>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {data &&
          data.posts.map((post) => (
            <Link
              to={`/posts/${post._id}`}
              key={post._id}
              className="relative grid h-36 max-w-[400px] grid-cols-10 rounded-xl p-2.5 shadow-md md:h-56 lg:h-64 lg:max-w-full"
            >
              <div className="col-span-4 rounded-md bg-pink-200 md:col-span-5"></div>
              <div className="col-span-6 flex flex-col justify-between py-3 pl-2 md:col-span-5 ">
                <h1 className="w-full font-medium">{post.title}</h1>
                <p className="reverseTheme w-min rounded-md bg-gray-700 px-6 text-sm ">
                  {post.topic}
                </p>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm font-light opacity-80">
                    {post.author.username}
                  </p>
                  <p className="text-xs opacity-40">{post.formated_date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
