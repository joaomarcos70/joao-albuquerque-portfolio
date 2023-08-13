import React, { Fragment, useEffect, useRef, useState } from "react";
import "./home-component.scss";
import IconComponent from "../../shared/icons/iconComponent";

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);
  const loadingReference = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [showText, setShowText] = useState(false);
  const [pause, setPause] = useState(false);
  const sideTexts = [
    "Meu nome é João Albuquerque",
    "Sou engenheiro front-end",
    "Seja bem vindo ao meu portifolio",
  ];
  const [currentSideText, setCurrentSideText] = useState("");

  const calculatePercentage = () => {
    if (loadingReference.current) {
      const parentWidth = loadingReference.current.parentElement.offsetWidth;
      const divWidth = loadingReference.current.offsetWidth;
      const calculatedPercentage = (divWidth / parentWidth) * 100;
      setPercentage(Math.round(calculatedPercentage));
    }
  };

  useEffect(() => {
    if (percentage === 20 || percentage === 40 || percentage === 60) {
      setShowText(true);
      setPause(true);
    }

    const updatePercentage = () => {
      calculatePercentage();

      if (percentage < 100) {
        requestAnimationFrame(updatePercentage);
      } else {
        setLoading(false);
      }
    };

    updatePercentage();
  }, [percentage]);

  useEffect(() => {
    const loadingElement = document.querySelector(".color");
    loadingElement.style.animationPlayState = pause ? "paused" : "running";

    const positionText = Math.min(
      Math.floor(percentage / 30),
      sideTexts.length - 1
    );

    setCurrentSideText(sideTexts[positionText]);

    setTimeout(() => {
      setPause(false);
    }, 1000);
  }, [pause]);

  return (
    <Fragment>
      {loading ? (
        <>
          <div className="loading-wrapper">
            <div ref={loadingReference} className="color">
              <div className="text-icon">
                <span className="icon">
                  <IconComponent icon="triangle" />
                </span>
                <p className="loading-text">CARREGANDO</p>
              </div>
              {showText ? <p className="side-text">{currentSideText}</p> : ""}
            </div>
          </div>
        </>
      ) : (
        <h1>test</h1>
      )}
    </Fragment>
  );
};

export default LoadingComponent;
