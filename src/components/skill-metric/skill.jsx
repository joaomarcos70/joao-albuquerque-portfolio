import React from "react";
import "./skill.scss";
const skillData = [
  {
    name: "angular",
    nivel: 3,
  },
  {
    name: "react",
    nivel: 3,
  },
  {
    name: "typescript",
    nivel: 3,
  },
  {
    name: "javascript",
    nivel: 3,
  },
  {
    name: "scss",
    nivel: 3,
  },
];

const SkillComponent = () => {
  return (
    <>
    <section className="skill-area">
      {skillData.map((item)=>(
        <div className="chip" onClick={()=> window.open('https://www.linkedin.com/in/joaoalbuquerq/overlay/top-skills-details/')}>
          <h1 className="name">{item.name}</h1>
        </div>
      ))}
    </section>
    </>
  );
};

export default SkillComponent;
