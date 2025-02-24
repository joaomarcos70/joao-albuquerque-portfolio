import React from "react";
import "./projects.scss";
import { projects } from "./projects.mock.ts";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper/modules";

const Projects = () => {
	const navigate = useNavigate();
	const [width, setWidth] = useState(window.innerWidth);

	const isMobile = width <= 920;

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const openLink = (url) => {
		if (url.includes("http")) {
			window.open(url, "_blank");
			return;
		}
		navigate(url);
	};

	const renderCarrouselProjects = () => {
		return (
			<Swiper modules={[Pagination, Navigation]}
				slidesPerView="auto"
				centerInsufficientSlides={true}
				spaceBetween={24}
				slidesOffsetBefore={isMobile ? 16 : 64}
				slidesOffsetAfter={isMobile ? 16 : 64}				
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				navigation={true}>
				{projects.map((project, index) => (
					<SwiperSlide key={index}>
						<div className="project-item" onClick={() => openLink(project.Link)}>
							<div className="icon">
								<span>saiba mais</span>
							</div>
							<div className="light"></div>
							<div className="project-image">
								<img loading="lazy" src={project.picture} alt={project.alt} />
							</div>
							<div className="project-info">
								<h1>{project.title}</h1>
								<p>{project.description}</p>
							</div>
							<div className="shadow"></div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		)
	}

	return (
			<section className="projects-container" id="projetos">
				<div className="title">
					<h1>Principais projetos.</h1>
				</div>
			{renderCarrouselProjects()}
			</section>
	);
};

export default Projects;
