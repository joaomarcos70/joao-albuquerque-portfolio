import React, { useContext } from "react";
import "./about.scss";
import { LanguageContext } from "../../context/languageContext";
import pt from '../../shared/utils/locales/pt.json'
import en from '../../shared/utils/locales/en.json'
import ReactMarkdown from 'react-markdown';


const About = () => {
	const { language } = useContext(LanguageContext)
	const contentPage = { pt, en }
	return (
		<>
			<section className="about-container" id="sobre">
				<div className="title">
					<h1>{contentPage[language].about_me.title}</h1>
				</div>
				<div className="about-content">
					<span className="picture">
						<img loading="lazy" src="/me-2.jpg" alt="foto do autor" />
					</span>
					<article className="describe">
						<ReactMarkdown>
							{contentPage[language].about_me.text_pt1}
						</ReactMarkdown>
						<ReactMarkdown>
							{contentPage[language].about_me.text_pt2}
						</ReactMarkdown>
						<ReactMarkdown>
							{contentPage[language].about_me.text_pt3}
						</ReactMarkdown>
						<ReactMarkdown>
							{contentPage[language].about_me.text_pt4}
						</ReactMarkdown>
					</article>
				</div>
			</section>
		</>
	);
};

export default About;
