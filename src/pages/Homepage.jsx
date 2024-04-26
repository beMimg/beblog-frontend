import { Link } from "react-router-dom";
import techImg from "../assets/tech-photo.jpg";
import { GoArrowDownRight } from "react-icons/go";

export default function Homepage() {
  return (
    <div className="flex h-full w-full flex-1 overflow-hidden p-5 lg:w-[70%] lg:p-0 2xl:w-[60%]">
      <div className="flex flex-col justify-around ">
        <div className=" relative pt-5 ">
          <h1 className=" animate-left-to-right text-2xl  font-semibold lg:text-5xl">
            Unraveling the Code:
          </h1>
          <h2 className="absolute animate-right-to-left text-lg text-blue-500 lg:text-2xl">
            Where Creativity Meets Functionality
          </h2>
        </div>
        <p
          className=" text-sm lg:text-lg
        "
        >
          Welcome to beBlog! Here, we delve deep into the fascinating world of
          coding. As a programmer, you understand the thrill of seeing your
          ideas come to life through code.
        </p>
        <div className="align-center  flex w-full items-center justify-center">
          <img
            src={techImg}
            alt="image with a computer"
            className="flex h-[200px] w-full animate-fade-in  self-center rounded-md object-cover object-center md:h-[500px] xl:w-[80%]"
          />
        </div>
        <Link
          to="/posts"
          className="flex animate-buttom-to-top flex-row items-center self-center rounded-md bg-blue-700 px-5 py-2 text-white lg:gap-4"
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
