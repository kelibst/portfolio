import Style from "../styles/Home.module.css";
import Image from "next/image";

const Project = ({ proj }) => {
  return (
    <div className={[Style.proCard].join(" ")}>
      <div className={[Style.proCardIcon].join(" ")}>
        <Image
          src={proj?.image}
          layout="intrinsic"
          width={257}
          height={200}
          alt="project image"
          className={Style.proImg}
        />
      </div>
      <a
        href={proj?.link}
        className="text-lg mb-6 text-gray-200 underline hover:text-white"
      >
        {proj?.name}
      </a>
      <div className="flex mt-6 flex-row justify-between text-md underline">
        {proj?.stack.map((stack) => (
          <span className="mr-2">{stack}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
