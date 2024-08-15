import React from "react";
import "./footer.scss";
import Contact from "../contatos/contact";

const Footer = () => {
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
						Não deixe de me chamar! Quer desenvolver seu portfólio, criar uma marca impactante, ou
						simplesmente trocar uma ideia sobre tech? Estou aqui para ajudar. Vamos juntos
						transformar suas ideias em realidade!
					</p>
					<button
						onClick={() => open({ url: "https://www.linkedin.com/in/joaoalbuquerq/" })}
						className="say-hello"
					>
						Envie uma mensagem
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
