import React from "react";

const UserSection = () => {
  return (
    <section className="">
      <div className="user-cont">
        <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none font-Rubik">
          Hello, I am Keli
        </h1>
        <h6 className="text-gray-300 my-8 pr-32 font-Rubik leading-8">
          I’m a Staff Software Engineer working on Front-End Experiences at
          Algolia. I can't shut up about test-driven development and
          utility-first CSS. I also host the Developer Experience podcast, and
          share what I learn on my blog frontstuff.io, or at meetups and
          conferences.
        </h6>
        <div className="user-btn-cont">
          <a
            className="text-white hover:text-gray-200 capitalize underline font-bold border-white"
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hire me
          </a>

          <a
            className="text-white hover:text-gray-200 capitalize ml-8 underline font-bold border-white"
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <ul className="flex flex-col mt-14">
          <li className="link">
            <a
              href="#"
              className="inline-flex items-center hover:text-gray-400 group text-white ease-in-out duration-300 "
            >
              <span className="text-xs tracking-wide">0.1</span>
              <span className="inline-block w-10 h-px mx-8  group-hover:w-28 bg-dawn ease-in-out duration-300 group-hover:bg-gray-400 w-38 bg-white"></span>
              <span className="text-xs uppercase">Skills</span>
            </a>
          </li>
          <li className="link mt-6">
            <a
              href="#"
              className="inline-flex items-center hover:text-gray-400 group ease-in-out duration-300 text-white"
            >
              <span className="text-xs tracking-wide">0.2</span>
              <span className="inline-block w-10 h-px mx-8  group-hover:w-28 bg-dawn ease-in-out duration-300 group-hover:bg-gray-400 w-38 bg-white"></span>
              <span className="text-xs uppercase">Projects</span>
            </a>
          </li>
          <li className="link mt-6">
            <a
              href="#"
              className="inline-flex items-center hover:text-gray-400 group text-white duration-300 ease-in-out"
            >
              <span className="text-xs tracking-wide">0.3</span>
              <span className="inline-block w-10 h-px mx-8  group-hover:w-28 bg-dawn group-hover:bg-gray-400 ease-in-out duration-300  w-38 bg-white"></span>
              <span className="text-xs uppercase">About</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserSection;
