import React, { useEffect, useState } from "react";
import "./landing-page-component.scss";
import Header from "../header/header";

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
      <div className="slogan">
        <h1>João Albuquerque</h1>
        <p>desenvolvedor front-end</p>
      </div>
      {isClickContato ? <div className="contato">contato</div> : ""}
      {isClickProjetos ? <div className="contato">projetos</div> : ""}
    </div>
  );
};

export default LandingPageComponent;
