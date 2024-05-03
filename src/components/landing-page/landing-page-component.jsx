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
        <h1>JOÃO ALBUQUERQUE</h1>
        <h1 className="sub"><span style={{color: 'rgb(255 209 40)'}}> desenvolvedor frontend</span></h1>
        <p>
          Minha jornada começou no desenvolvimento full stack, mas foi no 
          front que descobri minha verdadeira paixão, transformando códigos em experiências visuais marcantes.
          Com 24 anos, curto muito assistir filmes, séries, além de jogar video games, hobbies que aguçam minha
          criatividade e inspiram meu desenvolvimento. Estou sempre em busca de projetos que desafiem
          minhas habilidades e ampliem minha visão de futuro.
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
