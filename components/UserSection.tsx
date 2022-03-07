import React from "react";
import keli from "../public/images/prof.png";
import Image from "next/image";
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
import Link from "next/link";

const UserSection = () => {
  return (
    <section className="lg:w-1/2 xl:my-8" id="user">
      <div className="static flex flex-col justify-between w-full md:max-w-408 lg:max-w-496 lg:fixed lg:h-screen">
        <div className="ms:w-1/2 m-6 ">
          <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none font-Rubik max-w-screen-sm">
            Hello, I am Keli
          </h1>
          <h6 className="text-gray-300 my-8 md:pr-32 font-Rubik leading-8 max-w-screen-sm">
            Hello, I am Kekeli. I am currently a Freelance{" "}
            <span className="text-blue-400 font-bold underline">
              Full-Stack
            </span>{" "}
            Web Developer On{" "}
            <span className="text-blue-400 font-bold underline">Upwork</span>. I
            have a degree in Public Health (Health Information), but my passion
            for software development led me to pursue a career in remote
            software development. For the past couple of years, I have worked
            remotely through pair programming with students from all over the
            world to develop a very deep understanding of HTML, CSS, JavaScript,
            React, Redux, Ruby, and Ruby on Rails. I&apos;m looking to connect
            with developers from all over the world, and I&apos;d love to keep
            in touch.
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
          <ul className="md:flex hidden flex-col mt-14">
            <li className="link">
              <Link href="/#user" scroll={true}>
                <a className="inline-flex items-center hover:text-gray-400 focus:text-gray-400 active:text-gray-400 group text-white ease-in-out duration-300 ">
                  <span className="text-xs tracking-wide">0.1</span>
                  <span className="inline-block w-10 h-px mx-8  group-hover:w-28 group-focus:w-28 group-active:w-28 bg-dawn ease-in-out duration-300 group-hover:bg-gray-400 group-focus:bg-gray-400 w-38 bg-white"></span>
                  <span className="text-xs uppercase">Skills</span>
                </a>
              </Link>
            </li>
            <li className="link mt-6">
              <Link href="/#projects" scroll={true}>
                <a className="inline-flex items-center hover:text-gray-400 focus:text-gray-400 active:text-gray-400 group ease-in-out duration-300 text-white">
                  <span className="text-xs tracking-wide">0.2</span>
                  <span className="inline-block w-10 h-px mx-8  group-hover:w-28 group-focus:w-28 group-active:w-28 bg-dawn ease-in-out duration-300 group-hover:bg-gray-400 group-focus:bg-gray-400 w-38 bg-white"></span>
                  <span className="text-xs uppercase">Projects</span>
                </a>
              </Link>
            </li>
            <li className="link mt-6">
              <Link href="/#contact" scroll={true}>
                <a className="inline-flex items-center hover:text-gray-400 focus:text-gray-400 active:text-gray-400 group text-white duration-300 ease-in-out">
                  <span className="text-xs tracking-wide">0.3</span>
                  <span className="inline-block w-10 h-px mx-8  group-hover:w-28 group-focus:w-28 group-active:w-28 bg-dawn group-hover:bg-gray-400 group-focus:bg-gray-400 ease-in-out duration-300  w-38 bg-white"></span>
                  <span className="text-xs uppercase">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-32 ml-6">
          <div className="md:flex items-center w-full ">
            <div className="rounded-full mr-6">
              <Image
                src={keli}
                layout="intrinsic"
                width={50}
                height={50}
                placeholder="blur"
                alt="Picture of the author"
                className="rounded-full"
              />
            </div>
            <ul className="flex justify-between flex-wrap mr-2">
              <li className="md:pl-3">
                <a
                  className="flex justify-center items-center hover:text-gray-400"
                  href="https://www.linkedin.com/in/kelibst/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImLinkedin className="mr-2 md:mr-3 text-lg" />
                  <span className="underline">LinkedIn</span>
                  <span className="ml-3">
                    <FaRegShareSquare className="text-md" />
                  </span>
                </a>
              </li>
              <li className="md:pl-3">
                <a
                  className="flex justify-center items-center hover:text-gray-400"
                  href="https://www.github.com/kelibst/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub className="mr-3 text-lg" />
                  <span className="underline">GitHub</span>
                  <span className="ml-3">
                    <FaRegShareSquare className="text-md" />
                  </span>
                </a>
              </li>

              <li className="md:pl-3">
                <a
                  className="flex justify-center items-center hover:text-gray-400"
                  href="https://twitter.com/keli_booster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="mr-3 text-lg" />
                  <span className="underline">Twitter</span>
                  <span className="ml-3">
                    <FaRegShareSquare className="text-md" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSection;
