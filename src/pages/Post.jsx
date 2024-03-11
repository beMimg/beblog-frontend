import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";

export default function Post() {
  const [post, setPost] = useState();
  const { post_id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts/${post_id}`,
        );
        setPost(response.data.post);
      } catch (err) {}
    };

    getPosts();
  }, []);

  return (
    post && (
      <div className="font-sans flex items-center justify-center ">
        <div className=" self-center  lg:max-w-[960px]">
          <div className="p-4 ">
            <div className="mb-5 h-[300px] bg-blue-400 lg:h-[500px]"></div>
            <div className="flex flex-col gap-20">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <h1 className="text-4xl font-semibold">{post.title}</h1>
                  <p className="">{post.topic}</p>
                </div>
                <p className="text-sm ">{post.formated_date}</p>
              </div>
              <p className=" text-lg leading-relaxed ">{post.text}</p>
              <p>
                This post was written by{" "}
                <Link to="/" className="font-semibold">
                  {post.author.username}
                </Link>{" "}
              </p>
            </div>
          </div>
          <CommentSection post_id={post_id} />
        </div>
      </div>
    )
  );
}
