import React, { useEffect, useState } from "react";
import "./landing-page-component.scss";
import Header from "../header/header";
import Contact from "../contatos/contact";
import SkillComponent from "../skill-metric/skill";
import Projetos from "../projetos/projetos";
import me from "./assets/me-5.png";
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

  const renderSloganComponent = () => {
    return (
      <div className="slogan">
        <h1>João Albuquerque</h1>
        <p>
          Desenvolvedor frontend experiente comprometido com soluções de alta
          qualidade. Buscando desafios e colaboração em projetos inovadores.
        </p>
      </div>
    );
  }

  return (
      <div className="landing-page-container">
        <div className="container">
          <GlassComponent>
            <Header />
              <div className="cols">
                <div className="info-container">
                  {renderSloganComponent()}
                  <SkillComponent/>
                  <Contact/>
                </div>
{/*                   <div className="img-container">
                    <img src={me}/>
                  </div> */}
                <div className="projects">
                  <Projetos/>
                </div>
              </div>
          </GlassComponent>
        </div>
      </div>
  );
};

export default LandingPageComponent;
