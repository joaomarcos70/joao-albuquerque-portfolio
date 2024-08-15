import React from "react";
import "./slogan.scss";
import lightRayImage from "../../shared/images/assets/light-ray.png";

const openLink = () => {
	window.open("https://picpay.com/");
};

const Slogan = () => {
	return (
		<>
			<div className="slogan-container" id="slogan">
				<div className="light-ray">
					<img src={lightRayImage} />
				</div>
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
					<div className="cv-button"></div>
				</div>
				<div className="spliner-viwer">
					<script
						type="module"
						src="https://unpkg.com/@splinetool/viewer@1.9.13/build/spline-viewer.js"
					></script>
					<spline-viewer
						loading-anim-type="spinner-small-dark"
						url="https://prod.spline.design/huJApuazq-Uci2Hk/scene.splinecode"
					></spline-viewer>
				</div>
			</div>
		</>
	);
};

export default Slogan;
