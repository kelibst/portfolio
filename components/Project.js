import Style from "../styles/Home.module.css";
import Image from "next/image";

const Project = (props) => {
  return (
    <div className={[Style.proCard].join(" ")}>
      <div className={[Style.proCardIcon].join(" ")}>
        <Image
          src="https://raw.githubusercontent.com/kelibst/ninjaskrill/main/src/assets/img/screenshot.gif"
          layout="intrinsic"
          width={257}
          height={200}
          alt="project image"
          className={Style.proImg}
        />
      </div>
      <a
        href="https://github.com/kelibst/ninjaskrill"
        className="text-lg mb-6 text-gray-200 underline hover:text-white"
      >
        NinjaSkrill
      </a>
      <div className="flex mt-6 flex-row justify-between text-md underline">
        <span>Phaser 3</span>
        <span>Jest </span>
        <span>WebPack</span>
      </div>
    </div>
  );
};

export default Project;
