import React, { useState } from "react";
import "./projetos.scss";
import IconComponent from "../../shared/icons/iconComponent";
import itau from "../../shared/images/projects/itau.jpg";
import omnik from "../../shared/images/projects/omnik.jpg";
import fcamara from "../../shared/images/projects/fcamara.jpg";

const Projetos = () => {
  const carrouselData = [
    {
      order: 1,
      src: itau,
      title: "itau",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      order: 2,
      src: omnik,
      title: "omnik",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      order: 3,
      src: fcamara,
      title: "fcamara",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carrouselData.length);
  };
  const before = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carrouselData.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="container">
      <div className="display">
        <div className="icon" onClick={next}>
        <IconComponent
          icon="chevron-right"
          className="chevron"
        />
        </div>
        <div className="line"></div>
        <div className="icon" onClick={before}>
        <IconComponent icon="chevron-left" className="chevron" />
        </div>
      </div>

      {carrouselData.map((item, index) =>
        index === currentSlide ? (
          <section className="container-carrousel" key={item.title}>
            <div className="carrousel">
              <img src={item.src} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="description">
              <a>saiba mais</a>
            </div>
          </section>
        ) : null
      )}
    </section>
  );
};

export default Projetos;