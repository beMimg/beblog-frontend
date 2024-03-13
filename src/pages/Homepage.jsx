import { Link } from "react-router-dom";
import techImg from "../assets/tech-photo.jpg";
import { GoArrowDownRight } from "react-icons/go";

export default function Homepage() {
  return (
    <div className="flex  w-full flex-1 justify-center p-5">
      <div className="flex flex-col justify-around ">
        <div className=" pt-5">
          <h1 className=" text-2xl font-semibold">Unraveling the Code:</h1>
          <h2 className="text-lg text-blue-500">
            Where Creativity Meets Functionality
          </h2>
        </div>
        <p className=" text-sm">
          Welcome to beBlog! Here, we delve deep into the fascinating world of
          coding As a programmer, you understand the thrill of seeing your ideas
          come to life through code.
        </p>
        <div className="align-center  flex w-full items-center justify-center">
          <img
            src={techImg}
            alt="image with a computer"
            className="flex h-[200px] w-full  self-center rounded-md object-cover object-center md:h-[500px] xl:w-[80%]"
          />
        </div>
        <Link
          to="/posts"
          className="flex flex-row items-center self-center rounded-md bg-blue-700 px-5 py-2 text-white lg:gap-4"
        >
          <p className="text-sm uppercase ">
            A place where we can talk about coding
          </p>
          <GoArrowDownRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
