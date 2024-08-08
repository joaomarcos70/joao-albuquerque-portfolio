import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import LandingPageComponent from "./components/landing-page/landing-page-component";
import Header from "./components/header/header";
import Slogan from "./components/slogan/slogan";
import About from "./components/about/about";
import ProjectsV3 from "./components/projetos/projects-v3";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
	return (
		<div className="App">
			<Header />
			<Slogan />
			<About />
			<ProjectsV3 />
			<LandingPageComponent />
		</div>
	);
};

root.render(<App />);
reportWebVitals();
