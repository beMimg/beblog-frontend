import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PostCard from "../components/PostsCard";
import Loading from "../components/Loading";
import api_domain from "../functions/api_domain";

export default function Posts() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${api_domain}api/posts`);
        setData(response.data);
        return;
      } catch (err) {
        setError("Apologies, there was an issue retrieving the posts");
        return;
      } finally {
        setIsLoading(false);
        return;
      }
    };
    getPosts();
  }, []);

  return (
    <div className="flex w-full flex-1 lg:justify-center">
      <div className="flex w-full flex-col gap-4 p-4 lg:w-[960px] ">
        <h1 className=" mb-6  pt-4 text-2xl font-semibold">
          Discover our latest posts
        </h1>
        <div className="flex flex-col gap-4 lg:gap-12">
          {isLoading && (
            <div className="self-center ">
              <Loading />
            </div>
          )}
          {error && <h2>{error}</h2>}
          {data &&
            data.posts.map((post) => <PostCard post={post} key={post._id} />)}
        </div>
      </div>
    </div>
  );
}
