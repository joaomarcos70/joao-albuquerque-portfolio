import React from "react";
import "./projects.scss";
import { projects } from "./projects.mock.ts";

const Projects = () => {
	const openLink = (url) => {
		window.open(url, "_blank");
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
