import React, { useContext } from "react";
import "./footer.scss";
import Contact from "../contatos/contact";
import { LanguageContext } from "../../context/languageContext";
import pt from '../../shared/utils/locales/pt.json'
import en from '../../shared/utils/locales/en.json'

const Footer = () => {
	const { language } = useContext(LanguageContext)
	const contentPage = { pt, en }
	const open = ({ url }) => {
		window.open(url, "_blank");
	};

	return (
		<>
			<footer className="footer" id="contato">
				<div className="bg-light"></div>
				<div className="light"></div>
				<div className="footer-content">
					<p>
						{contentPage[language].footer.details}
					</p>
					<button
						onClick={() => open({ url: "https://www.linkedin.com/in/joaoalbuquerq/" })}
						className="say-hello"
					>
						{contentPage[language].footer.CTA}
					</button>
				</div>
			</footer>
			<div className="spacing">
				<Contact />
			</div>
		</>
	);
};

export default Footer;
