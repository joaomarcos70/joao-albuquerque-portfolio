import React from "react";
import "./about.scss";
import Me from "../../shared/images/assets/me.jpg";

const About = () => {
	return (
		<section className="about-container">
			<div className="about-content">
				<div className="picture">
					<img src={Me} alt="foto do autor" />
				</div>

				<div className="describe">
					<div className="title">
						<h1>Um pouco sobre mim.</h1>
					</div>
					Meu interesse por desenvolvimento começou com os jogos online, onde eu poderia passar o
					dia inteiro jogando e esse seria o dia perfeito.
					<br />
					<br />
					Mas foi em 2010 que, sem saber na hora, descobri uma das minhas maiores paixões:
					personalizar coisas. Tudo que eu tinha eu queria mudar do estado "default".
					<br />
					<br />
					Foi então que criei um canal no YouTube sobre personalização de Windows 7, onde eu podia
					criar, reutilizar e brincar mudando todo o sistema operacional do notebook da minha mãe
					(ela nem ficava brava, confia).
					<br />
					<br />
					E somente em 2019, iniciei minha carreira em desenvolvimento como full stack, o que
					considero um ótimo começo, ter contato com um pouco de tudo foi incrível, e aprender algo
					novo todos os dias era gratificante.
					<br />
					<br />
					Porém, foi no front-end que realmente me encontrei. Hoje, meu foco está em criar
					experiências incríveis e únicas para os usuários. Cada projeto é uma oportunidade de
					inovar e superar as expectativas, transformando ideias em realidade. A satisfação de ver
					os usuários interagindo com algo que eu criei é o que me motiva a continuar evoluindo e
					buscando sempre o melhor.
				</div>
			</div>
		</section>
	);
};

export default About;
