import React, { useState, useEffect, useContext } from "react";
import "./header.scss";
import { AnchorMenuContext } from "../../context/anchorMenuContext";

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [scrolled, setScrolled] = useState(false);
	const [openMenuHamburguer, setOpenMenuHamburguer] = useState(false);
	const { anchorMenu, setAnchorMenu } = useContext(AnchorMenuContext);

	const isMobile = width <= 920;

	const menuOpen = () => {
		const menuHamburguer = document.querySelector(".hamburguer");
		menuHamburguer.classList.toggle("active");
		setOpenMenuHamburguer(!openMenuHamburguer);

		if (openMenuHamburguer) {
			document.body.style.overflow = "auto";
		} else {
			document.body.style.overflow = "hidden";
		}
	};

	const defineMenuAnchor = (hash) => {
		setAnchorMenu(hash);
		setOpenMenuHamburguer(false);
		document.body.style.overflow = "auto";
		if (isMobile && document.querySelector(".hamburguer").classList.contains("active")) {
			document.querySelector(".hamburguer").classList.remove("active");
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<ul className={`header ${scrolled ? "header-scrolled" : ""}`}>
				<div className="logo">JA</div>
				{isMobile ? (
					<div className="hamburguer" onClick={() => menuOpen()}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				) : (
					<div className="items">
						<li onClick={() => defineMenuAnchor("sobre")}>sobre</li>
						<li onClick={() => defineMenuAnchor("projetos")}>projetos</li>
						<li onClick={() => defineMenuAnchor("contato")}>contato</li>
					</div>
				)}
			</ul>
			{openMenuHamburguer && isMobile ? (
				<div className="menu-hamburguer-container">
					<ul className="menu-hamburguer-items">
						<li onClick={() => defineMenuAnchor("sobre")}>sobre</li>
						<li onClick={() => defineMenuAnchor("projetos")}>projetos</li>
						<li onClick={() => defineMenuAnchor("contato")}>contato</li>
					</ul>
				</div>
			) : null}
		</>
	);
};

export default Header;
