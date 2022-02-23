import SkillData from "../Dataset/SkillData";
import Style from "../styles/Home.module.css";
import Project from "./Project";

import Skill from "./Skill";
const ProjectsSection = () => {
  return (
    <section className="w-1/2 xl:pr-8 xl:my-8 z-20">
      {SkillData.map((skil) => (
        <Skill skil={skil} key={skil.name} />
      ))}

      <div className={[Style?.all].join(" ")}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default ProjectsSection;
