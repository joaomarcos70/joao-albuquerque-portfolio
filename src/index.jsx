import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
	useLocation,
} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import SuperfoodProject from "./components/superfood-project/superfood-project";
import { AnchorMenuProvider } from "./context/anchorMenuContext";
import { LanguageProvider } from "./context/languageContext";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";


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
		<LanguageProvider>
			<AnchorMenuProvider>
				<RouterProvider router={router} />
			</AnchorMenuProvider>
		</LanguageProvider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
