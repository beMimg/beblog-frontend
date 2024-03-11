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
      <>
        <div className="p-4">
          <div className="mb-5 h-[300px] bg-blue-400"></div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold">{post.title}</h1>
                <p className="font-light ">{post.topic}</p>
              </div>
              <p className="text-sm font-light">{post.formated_date}</p>
            </div>
            <p className=" leading-relaxed">{post.text}</p>
            <p>
              This post was written by{" "}
              <Link to="/" className="font-semibold">
                {post.author.username}
              </Link>{" "}
            </p>
          </div>
        </div>
        <CommentSection post_id={post_id} />
      </>
    )
  );
}
