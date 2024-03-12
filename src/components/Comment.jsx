import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useUser } from "../context/userProvider";

export default function Comment({ comment, post_id, setForceRerender }) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editComment, setEditComment] = useState("");

  const { user } = useUser();

  function handleEditForm() {
    setIsEditFormOpen(!isEditFormOpen);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${post_id}/comments/${comment._id}`,
        { text: editComment },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setForceRerender((prevForceRerender) => {
        return prevForceRerender + 1;
      });
      setIsEditFormOpen(false);
    } catch (err) {
      return;
    }
  }

  return (
    <div
      className=" mb-14 flex flex-col gap-3 border-b border-gray-400"
      key={comment._id}
    >
      <div className=" items-centergap-2 flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <div
            className={`bg-${comment.author.color}-400 h-8 w-8 rounded-full`}
          ></div>
          {/* Link to user profile */}
          <h2 className=" font-medium">{comment.author.username}</h2>
        </div>
        {comment.author._id === user.user._id && (
          <CiEdit className="cursor-pointer text-xl" onClick={handleEditForm} />
        )}
      </div>
      {!isEditFormOpen ? (
        <p>{comment.text}</p>
      ) : (
        <form className="flex flex-row gap-5" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
            placeholder={comment.text}
            className="themeModalButton my-2 w-full p-2"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-2 py-[1px] text-center"
          >
            Edit
          </button>
        </form>
      )}

      <p className="self-end pb-2 text-sm text-gray-500">
        {comment.formated_date}
      </p>
    </div>
  );
}
