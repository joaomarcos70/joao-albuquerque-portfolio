import React from "react";
import classNames from "classnames";
import AngularIcon from "./svg/angular";

const tidy = (string) => string.toLowerCase().trim();

const getIcon = (name, color = "#494949") => {
  switch (tidy(name)) {
    case "angular":
      return <AngularIcon color={color} />;
    default:
      return "";
  }
};

const SvgIcons = ({ name, classes, color }) => (
  <div id={`${tidy(name)}-logo-icon`} className={classNames("icon", classes)}>
    {getIcon(tidy(name), color)}
  </div>
);

export default SvgIcons;