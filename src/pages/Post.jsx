import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState();

  const { post_id } = useParams();
  console.log(post_id);
  // useEffect(() => {
  //   try {
  //     const response = axios.get(`http://localhost:3000/api/posts/`);
  //   } catch (err) {}
  // }, []);

  return <p>loll</p>;
}
