import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import Loading from "../components/Loading";
import api_domain from "../functions/api_domain";

export default function Post() {
  const [post, setPost] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { post_id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${api_domain}api/posts/${post_id}`);
        setPost(response.data.post);
        return;
      } catch (err) {
        return;
      } finally {
        setIsLoading(false);
        return;
      }
    };
    getPosts();
  }, [post_id]);

  return post && isLoading === false ? (
    <div className="font-sans flex animate-fade-in items-center justify-center">
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
  ) : (
    isLoading && (
      <div className="flex flex-1 items-center justify-center">
        <Loading />
      </div>
    )
  );
}
