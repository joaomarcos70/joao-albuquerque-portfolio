import React, { useEffect, useState } from "react";
import "./landing-page-component.scss";
import Header from "../header/header";
import Contact from "../contatos/contact";
import SkillComponent from "../skill-metric/skill";

const LandingPageComponent = () => {
  const [isClickContato, setClickContato] = useState(false);
  const [isClickProjetos, setClickProjetos] = useState(false);
  const [isClickButton, setIsClickButton] = useState(false);
  const [actionButtonClicked, setActionButtonClicked] = useState("");

  useEffect(() => {
    if (actionButtonClicked === "contato") {
      setClickContato(!isClickContato);
    } else if (actionButtonClicked === "projetos") {
      setClickProjetos(!isClickProjetos);
    }
  }, [isClickButton]);

  const handleClickBtn = (event) => {
    setIsClickButton(!isClickButton);
    setActionButtonClicked(event.target.id);
  };

  return (
    <div className="landing-page">
      <Header handleClick={(event) => handleClickBtn(event)} />
      <div className="cols1">
        <div className="slogan">
          <h1>João Albuquerque</h1>
          <p>
            Desenvolvedor frontend experiente comprometido com soluções de alta
            qualidade. Buscando desafios e colaboração em projetos inovadores.
          </p>
        </div>
        <div className="skills">
          <SkillComponent />
        </div>
      </div>
      {isClickContato ? (
        <div className="contato" color="#ffffff">
          <Contact />
        </div>
      ) : (
        ""
      )}
      {isClickProjetos ? <div className="projeto">projetos</div> : ""}
    </div>
  );
};

export default LandingPageComponent;
