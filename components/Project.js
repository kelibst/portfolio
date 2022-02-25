import Style from "../styles/Home.module.css";
import Image from "next/image";
import { FaRegShareSquare } from "react-icons/fa";

const Project = ({ proj }) => {
  return (
    <div
      className={[Style.proCard, Style.bgDusk, "px-2 py-2"].join(" ")}
      key={proj.name}
    >
      <div className={[Style.proCardIcon].join(" ")}>
        <Image
          src={proj?.image}
          layout="fill"
          alt="project image"
          className={[Style.proImg].join(" ")}
        />
      </div>
      <a
        href={proj?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-gray-300 flex-row items-center flex underline hover:text-white"
      >
        {proj?.name} <FaRegShareSquare className="text-md ml-3" />
      </a>
      <div className=" mt-6 flex flex-wrap justify-between text-md">
        {proj?.stack.map((stack) => (
          <span className="mr-2 mt-3" key={stack}>
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
