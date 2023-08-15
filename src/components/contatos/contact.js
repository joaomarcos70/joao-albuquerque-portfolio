import React from "react";
import "./contact.scss";
import IconComponent from "../../shared/icons/iconComponent";

const Contact = () => {
  return (
    <>
      <section className="contact-area">
        <div className="email">
          <a>joaomarcos70@outlook.com.br</a>
          <IconComponent icon="arrow-up-right" />
        </div>
        <div className="social">
          <div className="github">
              <img src=""></img>
              <p>instagram</p>
          </div>
          <div className="linkedin">
              <img src=""></img>
              <p>linkedin</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
