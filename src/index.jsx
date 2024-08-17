import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/header";
import Slogan from "./components/slogan/slogan";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import { AnchorMenuContext, AnchorMenuProvider } from "./context/anchorMenuContext";
import Footer from "./components/footer/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuperfoodProject from "./components/superfood-project/superfood-project";

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

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<AnchorMenuProvider>
				<App />
			</AnchorMenuProvider>
		),
	},
	{
		path: "/projeto-superfood",
		element: <SuperfoodProject />,
	},
]);

root.render(<RouterProvider router={router}></RouterProvider>);
reportWebVitals();
