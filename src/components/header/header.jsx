import React from "react";
import "./header.scss";

const Header = ({ handleClick }) => {
  return (
    <nav>
      <ul className="header">
        <li id="projetos" onClick={handleClick}>
          projetos
        </li>
        <li id="contato" onClick={handleClick}>
          contato
        </li>
        <li id="sobre" onClick={handleClick}>
          sobre
        </li>
      </ul>
    </nav>
  );
};

export default Header;
