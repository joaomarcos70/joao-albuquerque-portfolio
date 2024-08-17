import React from "react";
import "./projects.scss";
import { projects } from "./projects.mock.ts";
import { useNavigate } from "react-router-dom";

const Projects = () => {
	const navigate = useNavigate();

	const openLink = (url) => {
		if (url.includes("http")) {
			window.open(url, "_blank");
			return;
		}
		navigate(url);
	};

	return (
		<div className="projects-container" id="projetos">
			<div className="title">
				<h1>Principais projetos.</h1>
			</div>
			<div className="projects">
				{projects.map((project, index) => (
					<div key={index} className="project-item" onClick={() => openLink(project.Link)}>
						<div className="icon">
							<span>saiba mais</span>
						</div>
						<div className="light"></div>
						<div className="project-image">
							<img src={project.picture} alt="project" />
						</div>
						<div className="project-info">
							<h1>{project.title}</h1>
							<p>{project.description}</p>
						</div>
						<div className="shadow"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
