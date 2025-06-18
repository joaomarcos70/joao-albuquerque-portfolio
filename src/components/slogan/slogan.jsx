import React, { useContext } from "react";
import "./slogan.scss";
import lightRayImage from "../../shared/images/assets/light-ray.png";
import sloganGif from "../../shared/images/assets/slogan.gif";
import { LanguageContext } from "../../context/languageContext";
import pt from '../../shared/utils/locales/pt.json'
import en from '../../shared/utils/locales/en.json'

const openLink = () => {
	window.open("https://picpay.com/");
};

const Slogan = () => {
	const { language } = useContext(LanguageContext)
	const contentPage = { pt, en }

	return (
		<>
			<div className="slogan-container" id="slogan">
				<div className="slogan-content">
					<h1>João Albuquerque</h1>
					<h2>{contentPage[language].home.profession}</h2>
					<p className="subtext">
						{contentPage[language].home.profession_details}{' '}
						<span onClick={() => openLink()} className="highlight">
							{contentPage[language].home.current_job}
						</span>
					</p>
					<div
						className="cv-button"
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/15HM-D1YhhcMDyuX-h4SeKF0FJdQIQjVj/view?usp=sharing",
								"_blank"
							)
						}
					></div>
				</div>
				<div className="spliner-viwer">
					<img src={sloganGif} rel="preload" fetchpriority="high" alt="imagem de slogan" />
				</div>
				<div className="light-ray">
					<img src={lightRayImage} rel="preload" fetchpriority="high" alt="imagem de raio solar" />
				</div>
			</div>
		</>
	);
};

export default Slogan;
