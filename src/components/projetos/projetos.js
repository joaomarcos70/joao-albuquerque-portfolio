import React from "react";
import "./projetos.scss";
import IconComponent from "../../shared/icons/iconComponent";

const Projetos = () => {
  return (
    <>
      <section className="container">
        <div className="display">
          <IconComponent icon="chevron-right" className="chevron" />
          <div className="line"></div>
          <IconComponent icon="chevron-left" className="chevron" />
        </div>

        <section className="container-carrousel">
          <div className="carrousel">
            <h1>teste</h1>
          </div>
          <div className="description">
            <p>teste</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projetos;
