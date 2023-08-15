import React, { useEffect, useState } from "react";
import "./landing-page-component.scss";
import Header from "../header/header";
import Contact from "../contatos/contact";

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
    <div className="landing-page noise">
      <Header handleClick={(event) => handleClickBtn(event)} />
      <div className="slogan">
        <h1>João Albuquerque</h1>
        <p>desenvolvedor front-end</p>
      </div>
      {isClickContato ? <div className="contato"><Contact/></div> : ""}
      {isClickProjetos ? <div className="projeto">projetos</div> : ""}
    </div>
  );
};

export default LandingPageComponent;
