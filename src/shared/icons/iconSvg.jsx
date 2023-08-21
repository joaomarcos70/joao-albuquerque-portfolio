import React from "react";
import classNames from "classnames";
import AngularIcon from "./svg/angular";
import GithubIcon from "./svg/github";
import LinkedinIcon from "./svg/linkedin";

const tidy = (string) => string.toLowerCase().trim();

const getIcon = (name, color = "#ffffff") => {
  switch (tidy(name)) {
    case "angular":
      return <AngularIcon color={color} />;
    case "github":
      return <GithubIcon color={color} />;
    case "linkedin":
      return <LinkedinIcon color={color} />;
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