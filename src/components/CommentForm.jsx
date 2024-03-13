import axios from "axios";
import { useCallback } from "react";
import { useState } from "react";

async function postComment(post_id, comment) {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/posts/${post_id}/comments`,
      { text: comment },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response);
    return;
  } catch (err) {
    console.log(err.response);
    return;
  }
}

export default function CommentForm({ post_id, setForceRerender }) {
  const [comment, setComment] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await postComment(post_id, comment);
    setComment("");
    setForceRerender((prevForceRerender) => {
      return prevForceRerender + 1;
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col rounded-lg border-2 border-blue-500 px-2 pt-2"
    >
      <input
        type="text"
        required
        maxLength={200}
        className="themeModalButton my-2 w-full p-2"
        value={comment}
        placeholder="Write a comment..."
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="  flex  items-center justify-end border-t border-gray-400 p-2">
        <button
          type="submit "
          className="rounded-md bg-blue-500 px-2  py-2 text-center text-sm uppercase text-white transition-all hover:scale-105"
        >
          Send
        </button>
      </div>
    </form>
  );
}
