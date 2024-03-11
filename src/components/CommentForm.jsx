export default function CommentForm() {
  return (
    <form className=" flex flex-col rounded-lg border-2 border-blue-500 px-2 pt-2">
      <input
        type="text"
        required
        className="themeModalButton my-2 w-full p-2"
      />
      <div className="  flex  items-center justify-end border-t border-gray-400 p-2">
        <button
          type="submit "
          className="rounded-md bg-blue-500 px-2 py-2 text-center"
        >
          Send
        </button>
      </div>
    </form>
  );
}
