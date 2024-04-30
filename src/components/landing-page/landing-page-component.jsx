import React, { useEffect, useState } from "react";
import "./landing-page-component.scss";
import Contact from "../contatos/contact";
import SkillComponent from "../skill-metric/skill";
import Projetos from "../projetos/projetos";
import me from "./assets/me-5.png";
import GlassComponent from "../glass/glass.component";

const LandingPageComponent = () => {
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
          <div className="cols">
            <div className="info-container">
              {renderSloganComponent()}
              <SkillComponent />
              <div className="projects">
                <Projetos />
              </div>
            </div>
            <img src={me} />
          </div>
          <Contact />
        </GlassComponent>
      </div>
    </div>
  );
};

export default LandingPageComponent;
