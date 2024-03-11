import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Comments({ comments }) {
  return (
    <div className="flex flex-col gap-10">
      {comments &&
        comments.map((comment) => (
          <div
            className="flex flex-col gap-3 border-b border-gray-400"
            key={comment._id}
          >
            <div className=" items-centergap-2 flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <div
                  className={`bg-${comment.author.color}-400 h-8 w-8 rounded-full`}
                ></div>
                {/* Link to user profile */}
                <Link to="/" className=" font-medium">
                  {comment.author.username}
                </Link>
              </div>
              {/* See user profile on click  */}
              <IoIosMore />
            </div>
            <p>{comment.text}</p>
            <p className="self-end pb-2 text-sm text-gray-500">
              {comment.formated_date}
            </p>
          </div>
        ))}
    </div>
  );
}
