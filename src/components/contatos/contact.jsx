import React from "react";
import "./contact.scss";
import IconComponent from "../../shared/icons/iconComponent";

const Contact = () => {
  const openLink = (url) =>{
    window.open(url)
  }
  return (
    <>
      <section className="contact-area">
          <p className="email">joaomarcos70@outlook.com.br</p>
        <div className="social">
          <div className="linkedin" onClick={()=> openLink('https://www.linkedin.com/in/joaoalbuquerq/')}>
          <IconComponent icon="linkedin"/>
          </div>
          <div className="github" onClick={()=> openLink('https://github.com/joaomarcos70')}>
          <IconComponent icon="github" />
          </div>
          <div className="insta" onClick={()=> openLink('https://www.instagram.com/johnalbuquerq/')}>
          <IconComponent icon="instagram" />
          </div>
          <p>© 2021 João Albuquerque</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
