import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	useLocation,
	Outlet,
	Navigate,
	useNavigate,
} from "react-router-dom";
import Home from "./components/home/home";
import SuperfoodProject from "./components/superfood-project/superfood-project";
import { AnchorMenuProvider } from "./context/anchorMenuContext";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		localStorage.setItem("currentPath", pathname);
	}, [pathname]);

	return null;
};

const Layout = () => (
	<>
		<ScrollToTop />
		<Header />
		<Outlet />
		<Footer />
	</>
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Navigate to="/home" replace />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/projeto-superfood",
				element: <SuperfoodProject />,
			},
			{
				path: "*",
				element: <Home />,
			},
		],
	},
]);

const App = () => {
	return (
		<AnchorMenuProvider>
			<RouterProvider router={router} />
		</AnchorMenuProvider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
