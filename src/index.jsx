import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import LandingPageComponent from "./components/landing-page/landing-page-component";
import Header from "./components/header/header";
import Slogan from "./components/slogan/slogan";
import About from "./components/about/about";
import Career from "./components/career/career";
import Projects from "./components/projects/projects";
import { AnchorMenuContext, AnchorMenuProvider } from "./context/anchorMenuContext";
import Contact from "./components/contatos/contact";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
	const { anchorMenu, setAnchorMenu } = useContext(AnchorMenuContext);

	useEffect(() => {
		if (anchorMenu !== "") {
			const element = document.getElementById(anchorMenu);
			element.scrollIntoView({ behavior: "smooth" });
			setAnchorMenu("");
		}
	}, [anchorMenu]);

	return (
		<div className="App">
			<Header />
			<Slogan />
			<About />
			<Projects />
			<Footer />
		</div>
	);
};

root.render(
	<AnchorMenuProvider>
		<App />
	</AnchorMenuProvider>
);
reportWebVitals();
