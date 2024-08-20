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
					<script
						type="module"
						src="https://unpkg.com/@splinetool/viewer@1.9.15/build/spline-viewer.js"
						async
					></script>
					<spline-viewer
						loading-anim-type="spinner-big-dark"
						url="https://prod.spline.design/huJApuazq-Uci2Hk/scene.splinecode"
					>
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAANCAYAAADISGwcAAAG1ElEQVR4AQCBAH7/AINGWQKDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAYNGWQyDRlkWg0ZZHINGWR+DRlkeg0ZZGINGWRCDRlkEg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAYNGWQeDRlkLAIEAfv8Ag0ZZAoNGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkJg0ZZFINGWR6DRlklg0ZZKINGWSeDRlkhg0ZZGINGWQyDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZBINGWQcAgQB+/wCDRlkDg0ZZAYNGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZC4NGWRiDRlklg0ZZL4NGWTeDRlk6g0ZZOYNGWTKDRlkog0ZZG4NGWQ2DRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkBg0ZZBACBAH7/AINGWQiDRlkGg0ZZA4NGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZBoNGWRKDRlkfg0ZZLoNGWTyDRllIg0ZZUINGWVSDRllSg0ZZS4NGWUCDRlkxg0ZZIYNGWRKDRlkDg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQGDRlkEAIEAfv8Ag0ZZD4NGWQ2DRlkLg0ZZCINGWQWDRlkFg0ZZCINGWQ6DRlkYg0ZZJYNGWTSDRllFg0ZZVINGWWGDRllqg0ZZboNGWW2DRlllg0ZZWYNGWUqDRlk4g0ZZJ4NGWRaDRlkJg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkCg0ZZBoNGWQgAgQB+/wCDRlkTg0ZZEoNGWQ+DRlkNg0ZZDINGWQ2DRlkQg0ZZGINGWSODRlkyg0ZZQoNGWVSDRlllg0ZZc4NGWX2DRlmBg0ZZgINGWXiDRllsg0ZZXINGWUmDRlk2g0ZZJYNGWRaDRlkLg0ZZBINGWQGDRlkCg0ZZBINGWQeDRlkKg0ZZDACBAH7/AINGWRCDRlkPg0ZZDYNGWQuDRlkKg0ZZC4NGWQ+DRlkXg0ZZIoNGWTGDRllDg0ZZVYNGWWaDRll1g0ZZf4NGWYSDRlmDg0ZZfINGWW+DRllfg0ZZTYNGWTqDRlkog0ZZGYNGWQ2DRlkGg0ZZA4NGWQKDRlkEg0ZZB4NGWQqDRlkMAIEAfv8Ag0ZZB4NGWQaDRlkDg0ZZAYNGWQCDRlkAg0ZZA4NGWQqDRlkVg0ZZJINGWTWDRllGg0ZZV4NGWWaDRllwg0ZZdYNGWXWDRllug0ZZY4NGWVODRllBg0ZZL4NGWR6DRlkPg0ZZBYNGWQCDRlkAg0ZZAINGWQCDRlkBg0ZZBINGWQYAgQB+/wCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQKDRlkPg0ZZHoNGWS+DRlk/g0ZZTYNGWVeDRllcg0ZZXINGWVaDRllLg0ZZPYNGWSyDRlkbg0ZZDINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAACBAH7/AINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkJg0ZZGINGWSaDRlkzg0ZZPYNGWUKDRllCg0ZZPINGWTODRlkmg0ZZF4NGWQiDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAAIEAfv8Ag0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkJg0ZZFoNGWSKDRlkqg0ZZL4NGWS+DRlkqg0ZZIYNGWRaDRlkJg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQIAgQB+/wCDRlkKg0ZZB4NGWQGDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQODRlkPg0ZZGYNGWSGDRlklg0ZZJYNGWSGDRlkZg0ZZD4NGWQODRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQKDRlkIg0ZZDAGBAH7/AINGWRODRlkQg0ZZCoNGWQGDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAoNGWQ2DRlkXg0ZZHoNGWSKDRlkig0ZZHoNGWReDRlkNg0ZZAoNGWQCDRlkAg0ZZAINGWQCDRlkAg0ZZAINGWQCDRlkCg0ZZCoNGWRCDRlkTevD7atXh8k4AAAAASUVORK5CYII="
							alt="Spline preview"
							style={{ width: "100%", height: "100%" }}
						/>
					</spline-viewer>
				</div>
				<div className="light-ray">
					<img src={lightRayImage} />
				</div>
			</div>
		</>
	);
};

export default Slogan;
