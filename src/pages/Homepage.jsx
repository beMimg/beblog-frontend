import techImg from "../assets/tech-photo.jpg";

export default function Homepage() {
  return (
    <div className="flex  w-full flex-1 justify-center p-4">
      <div className="grid w-full grid-rows-[15%-70%-15%] items-center text-center">
        <h1 className="  text-7xl font-medium ">beMimg</h1>
        <div className="align-center flex w-full items-center justify-center">
          <img
            src={techImg}
            alt="image with a computer"
            className="flex h-[300px] w-full  self-center rounded-md object-cover object-center md:h-[500px] xl:w-[80%]"
          />
        </div>
        <p className="text-lg underline">
          A place where we can talk about coding
        </p>
      </div>
    </div>
  );
}
