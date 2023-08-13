import React, { Fragment, useEffect, useRef, useState } from "react";
import "./loading-component.scss";
import IconComponent from "../../shared/icons/iconComponent";

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  const loadingReference = useRef(null);
  const [percentage, setPercentage] = useState(0);

  const calculatePercentage = () => {
    if (loadingReference.current) {
      const parentWidth = loadingReference.current.parentElement.offsetWidth;
      const divWidth = loadingReference.current.offsetWidth;
      const calculatedPercentage = (divWidth / parentWidth) * 100;
      setPercentage(calculatedPercentage);
    }
  };

  useEffect(() => {
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

  return (
    <Fragment>
      {loading ? (
        <div className="loading-wrapper">
          <div ref={loadingReference} className="color">
            <div className="text-icon">
              <span className="icon">
                <IconComponent icon="triangle" />
              </span>
              <p className="loading-text">CARREGANDO</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>teste</h1>
      )}
    </Fragment>
  );
};

export default LoadingComponent;
