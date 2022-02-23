import Style from "../styles/Home.module.css";
import Image from "next/image";

const Project = ({ proj }) => {
  return (
    <div className={[Style.proCard, Style.bgDusk, "px-2 py-2"].join(" ")}>
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
        className="text-lg mb-6 text-gray-300 underline hover:text-white"
      >
        {proj?.name}
      </a>
      <div className="flex mt-6 flex-row flex-wrap justify-between text-md">
        {proj?.stack.map((stack) => (
          <span className="mr-2 mt-3">{stack}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
