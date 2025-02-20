import React from "react";
import "./slogan.scss";
import lightRayImage from "../../shared/images/assets/light-ray.png";
import sloganGif from "../../shared/images/assets/slogan.gif";

const openLink = () => {
	window.open("https://picpay.com/");
};

const Slogan = () => {
	return (
		<>
			<div className="slogan-container" id="slogan">
				<div className="slogan-content">
					<h1>João Albuquerque</h1>
					<h2>desenvolvedor de software</h2>
					<p className="subtext">
						Sou um desenvolvedor front-end especializado na construção de experiências digitais.
						Atualmente, eu estou trabalhando no{" "}
						<span onClick={() => openLink()} className="highlight">
							Picpay
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
