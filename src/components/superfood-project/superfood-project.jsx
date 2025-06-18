import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import pt from '../../shared/utils/locales/pt.json';
import en from '../../shared/utils/locales/en.json'
import clientsPic from "../projects/pic-projects/superfood/clients.png";
import createDocPic from "../projects/pic-projects/superfood/create-document.png";
import docPic from "../projects/pic-projects/superfood/documents.jpg";
import editDocPic from "../projects/pic-projects/superfood/edit-document.png";
import loginPic from "../projects/pic-projects/superfood/login.png";
import "./superfood-project.scss";
import ReactMarkdown from 'react-markdown';

const contentPage = { pt, en }

const SuperfoodProject = () => {
	
	const { language } = useContext(LanguageContext)

	return (
		<div className="main-container">
			<div className="content">
				<h1>{contentPage[language].projects.project2.content.title}</h1>

				<h2>{contentPage[language].projects.project2.content.overview_title}</h2>

				<ReactMarkdown>{contentPage[language].projects.project2.content.overview_text}</ReactMarkdown>


				<h2>{contentPage[language].projects.project2.content.main_features_title}</h2>

				<h3>{contentPage[language].projects.project2.content.features[0].title}</h3>
				<ReactMarkdown>{contentPage[language].projects.project2.content.features[0].text}</ReactMarkdown>


				<h3>{contentPage[language].projects.project2.content.features[1].title}</h3>
				<ul>
					<ReactMarkdown>{contentPage[language].projects.project2.content.features[1].list[0]}</ReactMarkdown>

					<ReactMarkdown>{contentPage[language].projects.project2.content.features[1].list[1]}</ReactMarkdown>
				</ul>

				<h3>{contentPage[language].projects.project2.content.features[2].title}</h3>

				<h4>{contentPage[language].projects.project2.content.features[2].sections[0].subtitle}</h4>
				<ul>
					<ReactMarkdown>
						{contentPage[language].projects.project2.content.features[2].sections[0].list[0]}
					</ReactMarkdown>
					<ReactMarkdown>
						{contentPage[language].projects.project2.content.features[2].sections[0].list[1]}

					</ReactMarkdown>
					<ReactMarkdown>
						{contentPage[language].projects.project2.content.features[2].sections[0].list[2]}
					</ReactMarkdown>
				</ul>

				<h4>{contentPage[language].projects.project2.content.features[2].sections[1].subtitle}</h4>
				<ul>
					<ReactMarkdown>
						{contentPage[language].projects.project2.content.features[2].sections[1].list[0]}
					</ReactMarkdown>
					<ReactMarkdown>
						{contentPage[language].projects.project2.content.features[2].sections[1].list[1]}

					</ReactMarkdown>
				</ul>

				<h3>{contentPage[language].projects.project2.content.features[3].title}</h3>
				<ReactMarkdown>
					{contentPage[language].projects.project2.content.features[3].text}
				</ReactMarkdown>

				<h3>{contentPage[language].projects.project2.content.features[4].title}</h3>
				<ul>
					<ReactMarkdown>
						{contentPage[language].projects.project2.content.features[4].list[0]}
					</ReactMarkdown>
				</ul>

				<h2>{contentPage[language].projects.project2.content.screenshots_title}</h2>

				<h3>{contentPage[language].projects.project2.content.screenshots[0].title}</h3>
				<img src={loginPic} alt="Área de Login" style={{ width: "100%" }} />
				<h3>{contentPage[language].projects.project2.content.screenshots[1].title}</h3>
				<img src={docPic} alt="Gerenciar Documentos" style={{ maxWidth: "100%" }} />

				<h3>{contentPage[language].projects.project2.content.screenshots[2].title}</h3>
				<img src={createDocPic} alt="Criar Atividade" style={{ maxWidth: "100%" }} />

				<h3>{contentPage[language].projects.project2.content.screenshots[3].title}</h3>
				<img src={editDocPic} alt="Editar Documento" style={{ maxWidth: "100%" }} />

				<h3>{contentPage[language].projects.project2.content.screenshots[4].title}</h3>
				<img src={clientsPic} alt="Clientes" style={{ maxWidth: "100%" }} />

				<h2>{contentPage[language].projects.project2.content.final_considerations_title}</h2>
				<p>
					{contentPage[language].projects.project2.content.final_considerations_text}
				</p>
			</div>
		</div>
	);
};

export default SuperfoodProject;
