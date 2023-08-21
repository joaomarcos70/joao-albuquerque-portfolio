import React from "react";
import "./skill.scss";
import SvgIcons from "../../shared/icons/iconSvg";
const skillData = [
  {
    name: "ANGULAR",
    nivel: 3,
  },
  {
    name: "REACT",
    nivel: 3,
  },
  {
    name: "TYPESCRIPT",
    nivel: 3,
  },
  {
    name: "JAVASCRIPT",
    nivel: 3,
  },
  {
    name: "SASS",
    nivel: 3,
  },
];

const SkillComponent = () => {
  return (
    <>
    <section className="skill-area">
      {skillData.map((item)=>(
        <div className="chip">
          <h1 className="name">{item.name}</h1>
        </div>
      ))}
    </section>
    </>
  );
};

export default SkillComponent;
