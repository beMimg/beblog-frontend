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
        return;
      } catch (err) {}
    };
    getPosts();
  }, [post_id]);

  return (
    post && (
      <div className="font-sans animate-fade-in flex items-center justify-center">
        <div className=" self-center lg:w-[960px]">
          <div className="flex flex-col gap-12 p-5">
            <div>
              <h1 className="text-2xl font-semibold">{post.title}</h1>
              <div className="flex flex-row gap-2">
                <p>Topics:</p>
                <p className="">{post.topic}</p>
              </div>
            </div>
            <img
              className="flex self-center  rounded-md object-cover object-center lg:h-[500px] lg:w-[90%]"
              src={post.imgSrc}
              alt=""
            />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">
                <p>Author: </p>
                <p className="font-semibold">{post.author.username}</p>
              </div>
              <p className="text-sm ">{post.formated_date}</p>
            </div>
            <p className="text-md leading-relaxed md:text-lg">{post.text}</p>
          </div>
          <CommentSection className="animate-fade-in" post_id={post_id} />
        </div>
      </div>
    )
  );
}
