import React from "react";
import Skill from "./Skill";
const ProjectsSection = () => {
  const lang = ["HTML", "CSS / SASS", "JavaScript", "Ruby", "Dart"];
  const libraries = [
    "Bootstrap",
    "UI Kit",
    "React",
    "Redux",
    "Strapi",
    "NextJs",
    "Tailwind",
    "Ruby on Rails",
    "Flutter",
  ];
  const testing = ["RSpec", "Capybara", "Jest", "React Testing Library"];
  const Databases = ["PostgreSQL", "MySQL", "SQLite3"];
  const Other = [
    "Netlify",
    "Git",
    "version",
    "control",
    "system",
    "Linux",
    "Heroku",
    "Pair",
    "programming",
  ];
  return (
    <section className="w-1/2 xl:pr-8 xl:my-8 z-20">
      <Skill skil={{ languages: lang, name: "Languages:" }} />
      <Skill
        skil={{ languages: libraries, name: "Frameworks and libraries:" }}
      />
      <Skill skil={{ languages: testing, name: "Testing:" }} />
      <Skill skil={{ languages: Databases, name: "Databases:" }} />

      <Skill skil={{ languages: Other, name: "Others:" }} />
    </section>
  );
};

export default ProjectsSection;
