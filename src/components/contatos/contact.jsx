import React from "react";
import "./contact.scss";
import IconComponent from "../../shared/icons/iconComponent";
import SvgIcons from "../../shared/icons/iconSvg";

const Contact = () => {

  const openLink = (url) =>{
    window.open(url)
  }
  return (
    <>
      <section className="contact-area">
        <div className="email">
          joaomarcos70@outlook.com.br
        </div>
        <div className="social">
          <div className="linkedin" onClick={()=> openLink('https://www.linkedin.com/in/joaoalbuquerq/')}>
              <SvgIcons name="linkedin" color={"#343E46"} classes={"iconSocial"}></SvgIcons>
          </div>
          <div className="github" onClick={()=> openLink('https://github.com/joaomarcos70')}>
              <SvgIcons name="github" color={"#343E46"} classes={"iconSocial"}></SvgIcons>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
