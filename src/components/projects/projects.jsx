import React, { useContext, useMemo } from "react";
import "./projects.scss";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper/modules";
import { LanguageContext } from "../../context/languageContext.jsx";
import PicpayProject from "./pic-projects/lp-picpay.png";
import superfoodProject from "./pic-projects/superfood-mockup.png";
import pt from '../../shared/utils/locales/pt.json'
import en from '../../shared/utils/locales/en.json'

const Projects = () => {
	const navigate = useNavigate();
	const [width, setWidth] = useState(window.innerWidth);
	const { language } = useContext(LanguageContext)
	const contentPage = { pt, en }

	//textos de descrição não deverão passar de 125 caracteres
	const projectsMock = useMemo(() => [
		{
			title: contentPage[language].projects.project1.title,
			description: contentPage[language].projects.project1.desc,
			picture: PicpayProject,
			Link: "http://renegociacao.picpay.com",
			alt: "Recuperação de crédito PicPay",
		},
		{
			title: contentPage[language].projects.project2.title,
			description: contentPage[language].projects.project2.desc,
			picture: superfoodProject,
			Link: "/projeto-superfood",
			alt: "Gerenciamento de arquivos Superfood",
		},
	], [language]);


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
				{projectsMock.map((project, index) => (
					<SwiperSlide key={index}>
						<div className="project-item" onClick={() => openLink(project.Link)}>
							<div className="icon">
								<span>{contentPage[language].projects.suport_text}</span>
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
				<h1>{contentPage[language].projects.title}</h1>
			</div>
			{renderCarrouselProjects()}
		</section>
	);
};

export default Projects;
