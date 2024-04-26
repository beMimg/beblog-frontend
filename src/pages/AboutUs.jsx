export default function AboutUs() {
  return (
    <div className="flex flex-1 animate-fade-in flex-col justify-center gap-8 self-center p-4 lg:w-[70%] lg:gap-12 2xl:w-[60%]">
      <div>
        <h1 className="text-2xl font-semibold">About Us</h1>
        <p>
          Welcome to beBlog! I'm beMimg, and I'm excited to introduce you to our
          full-stack web application, built with Node.js and React.
        </p>
      </div>
      <div>
        <div>
          <h3 className="text-lg font-medium">
            Features for Authenticated Users:
          </h3>
          <ul className="list-disc pl-4">
            <li>Access all posts and their content, including comments.</li>
            <li>Write and edit comments.</li>
            <li>Edit profile picture colors with a simple click.</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">
          Features for Unauthenticated Users:
        </h3>
        <ul className="list-disc pl-4">
          <li>
            Access all posts and their content, including comments (but not
            write comments).
          </li>
        </ul>
      </div>
      <p>
        Additionally, only administrators have the privilege to create posts.
      </p>
      <p>
        You can find me on{" "}
        <a
          className="text-blue-700 underline"
          target="blank"
          href="https://github.com/beMimg"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
