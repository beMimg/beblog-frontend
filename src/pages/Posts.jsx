import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostsCard";

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
    <div className="flex min-h-screen justify-center ">
      <div className="flex flex-col gap-4 p-4 lg:w-[960px] ">
        <h1 className=" pl-2 pt-4 text-3xl font-semibold">
          Discover our latest posts
        </h1>
        <div className="flex flex-col gap-6 lg:gap-16">
          {data &&
            data.posts.map((post) => <PostCard post={post} key={post._id} />)}
        </div>
      </div>
    </div>
  );
}
