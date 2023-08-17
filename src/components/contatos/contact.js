import React from "react";
import "./contact.scss";
import IconComponent from "../../shared/icons/iconComponent";
import SvgIcons from "../../shared/icons/iconSvg";

const Contact = () => {
  return (
    <>
      <section className="contact-area">
        <div className="email">
          joaomarcos70@outlook.com.br
        </div>
        <div className="social">
          <div className="linkedin">
              <SvgIcons name="linkedin" color={"#343E46"} classes={"iconSocial"}></SvgIcons>
          </div>
          <div className="github">
              <SvgIcons name="github" color={"#343E46"} classes={"iconSocial"}></SvgIcons>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
