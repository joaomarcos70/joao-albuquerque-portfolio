import React, { useEffect, useState } from "react";
import "./landing-page-component.scss";
import Header from "../header/header";
import Contact from "../contatos/contact";
import SkillComponent from "../skill-metric/skill";
import Projetos from "../projetos/projetos";
import me from "./assets/me.png";
import IconComponent from "../../shared/icons/iconComponent";
import GlassComponent from "../glass/glass.component";

const LandingPageComponent = () => {
  const [isClickContato, setClickContato] = useState(true);
  const [isClickProjetos, setClickProjetos] = useState(true);
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
      <GlassComponent>
        <div className="header-icons">
          <IconComponent icon="moon" size="32" color="#343E46"/>
        </div>
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
          {isClickContato ? (
            <div className="contato" color="#ffffff">
              <Contact />
            </div>
          ) : (
            <div className="empty-div-contact"></div>
          )}
        </div>
        <div className="cols2">
          {/* <img src={me}></img> */}
        </div>
        <div className="cols3">
          {isClickProjetos ? (
            <div className="projeto">
              <Projetos />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </GlassComponent>
    </div>
  );
};

export default LandingPageComponent;
