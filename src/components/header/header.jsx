import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnchorMenuContext } from "../../context/anchorMenuContext";
import { LanguageContext } from "../../context/languageContext";
import en from '../../shared/utils/locales/en.json';
import pt from '../../shared/utils/locales/pt.json';
import "./header.scss";


const Header = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [scrolled, setScrolled] = useState(false);
	const [openMenuHamburguer, setOpenMenuHamburguer] = useState(false);
	const { setAnchorMenu } = useContext(AnchorMenuContext);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const isHomePage = pathname === "/home";
	const { language, setLanguageContext } = useContext(LanguageContext)
	const contentPage = { pt, en }
	const isMobile = width <= 920;
	const [selectedLanguage, setSelectedLanguage] = useState(language)


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

	const handleLangClick = (lang) => {
		setSelectedLanguage(lang)
		setLanguageContext(lang)
	}

	return (
		<>
			<div className={`header ${scrolled ? "header-scrolled" : ""}`}>
				<div className="logo" onClick={() => navigate("/home")}>
					JA
				</div>
				{isHomePage && isMobile ? (
					<div className="hamburguer" onClick={() => menuOpen()} alt="menu hamburguer" aria-label="menu hamburguer">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				) : (
					<><ul className="items">
						{isHomePage && (
							<>
								<li onClick={() => defineMenuAnchor("sobre")}>{contentPage[language].menu.items[0].name}</li>
								<li onClick={() => defineMenuAnchor("projetos")}>{contentPage[language].menu.items[1].name}</li>
								<li onClick={() => defineMenuAnchor("contato")}>{contentPage[language].menu.items[2].name}</li>
							</>
						)}
					</ul>
						<div className="toggle-container">
							<div onClick={() => handleLangClick('en')} className={"lang-btn" + (selectedLanguage === 'en' ? ' active' : '')}>EN</div>
							<div onClick={() => handleLangClick('pt')} className={"lang-btn" + (selectedLanguage === 'pt' ? ' active' : '')}>PT</div>
						</div>
					</>
				)}
			</div>
			{openMenuHamburguer && isMobile ? (
				<div className="menu-hamburguer-container">
					<ul className="menu-hamburguer-items">
						{isHomePage && (
							<>
								<>
									<li onClick={() => defineMenuAnchor("sobre")}>{contentPage[language].menu.items[0].name}</li>
									<li onClick={() => defineMenuAnchor("projetos")}>{contentPage[language].menu.items[1].name}</li>
									<li onClick={() => defineMenuAnchor("contato")}>{contentPage[language].menu.items[2].name}</li>
								</><div className="toggle-container">
									<div onClick={() => handleLangClick('en')} className={"lang-btn" + (selectedLanguage === 'en' ? ' active' : '')}>EN</div>
									<div onClick={() => handleLangClick('pt')} className={"lang-btn" + (selectedLanguage === 'pt' ? ' active' : '')}>PT</div>
								</div>
							</>
						)}
					</ul>
				</div>
			) : null}
		</>
	);
};

export default Header;
