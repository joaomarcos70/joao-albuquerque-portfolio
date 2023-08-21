import React from "react";
import "./header.scss";

const Header = ({ handleClick }) => {
  return (
    <nav>
      <ul className="header">
        <li id="projetos" onClick={handleClick}>
          Projetos
        </li>
        <li id="contato" onClick={handleClick}>
          Contato
        </li>
        <li id="sobre" onClick={handleClick}>
          Sobre
        </li>
      </ul>
    </nav>
  );
};

export default Header;
