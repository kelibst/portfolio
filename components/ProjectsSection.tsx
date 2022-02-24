import SkillData from "../Dataset/SkillData";
import Style from "../styles/Home.module.css";
import ProjectData from "../Dataset/ProjectData";
import Project from "./Project";

import Skill from "./Skill";
const ProjectsSection = () => {
  return (
    <section className="lg:w-1/2 xl:pr-8 xl:my-8 z-20">
      {SkillData.map((skil) => (
        <Skill skil={skil} key={skil.name} />
      ))}

      <div className={[Style?.all].join(" ")}>
        {ProjectData.map((proj) => (
          <Project proj={proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
