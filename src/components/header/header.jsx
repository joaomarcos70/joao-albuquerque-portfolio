import React from "react";
import "./header.scss";

const Header = ({ handleClick }) => {

  window.onscroll = () => {
    const header = document.querySelector('ul');
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  return (
      <ul className="header">
        <div className="logo">
          JA
        </div>

        <div className="items">
          <li id="projetos" onClick={handleClick}>
            projetos
          </li>
          <li id="contato" onClick={handleClick}>
            contato
          </li>
          <li id="sobre" onClick={handleClick}>
            sobre
          </li>
          <li id="content-create" onClick={handleClick}>
            criador de conteúdo
          </li>
        </div>
      </ul>
  );
};

export default Header;
