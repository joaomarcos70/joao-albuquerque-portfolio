import { useContext, useEffect } from "react";
import { AnchorMenuContext } from "../../context/anchorMenuContext";
import About from "../about/about";
import Projects from "../projects/projects";
import Slogan from "../slogan/slogan";

const Home = () => {
	const { anchorMenu, setAnchorMenu } = useContext(AnchorMenuContext);

	useEffect(() => {
		if (anchorMenu !== "") {
			const element = document.getElementById(anchorMenu);
			element.scrollIntoView({ behavior: "smooth" });
			setAnchorMenu("");
		}
	}, [anchorMenu]);

	return (
		<>
			<Slogan />
			<About />
			<Projects />
		</>
	);
};

export default Home;
