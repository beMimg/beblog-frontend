import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useUser } from "../context/userProvider";
import api_domain from "../functions/api_domain";
import { DateTime } from "luxon";

export default function Comment({ comment, post_id, setForceRerender }) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editComment, setEditComment] = useState(comment.text);

  const { user } = useUser();

  function handleEditForm() {
    setIsEditFormOpen(!isEditFormOpen);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${api_domain}api/posts/${post_id}/comments/${comment._id}`,
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

  // determine user's time zone using browser time zone
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // // use users time zone to format the date of comment
  const formattedDate = DateTime.fromISO(comment.formatted_date)
    .setZone(userTimeZone)
    .toLocaleString(DateTime.DATETIME_MED);

  return (
    comment &&
    comment.author && (
      <div
        className=" mb-14 flex flex-col gap-3 border-b border-gray-400 transition-all hover:translate-x-2"
        key={comment._id}
      >
        <div className=" items-centergap-2 flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <div
              className={`bg-${comment.author.color}-400 h-8 w-8 rounded-full`}
            ></div>
            <h2 className=" font-medium">{comment.author.username}</h2>
          </div>
          {user && comment.author._id === user.user._id && (
            <CiEdit
              className="cursor-pointer text-xl transition-all hover:scale-125"
              onClick={handleEditForm}
            />
          )}
        </div>
        {!isEditFormOpen ? (
          <p>{comment.text}</p>
        ) : (
          <form
            className="flex animate-fade-in flex-row gap-5"
            onSubmit={handleEditSubmit}
          >
            <input
              type="text"
              value={editComment}
              onChange={(e) => setEditComment(e.target.value)}
              className="themeModalButton my-2 w-full rounded-md p-2"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-2 text-center text-sm uppercase text-white transition-all hover:scale-105"
            >
              Edit
            </button>
          </form>
        )}
        <p className="self-end pb-2 text-sm text-gray-500">{formattedDate}</p>
      </div>
    )
  );
}
