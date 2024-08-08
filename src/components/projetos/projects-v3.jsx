import React from "react";
import "./projects-v3.scss";
import Accordion from "../../shared/accordion/accordion";

const ProjectsV3 = () => {
	return (
		<div className="projects-container">
			<Accordion
				title="Picpay - recuperação de crédito"
				children={
					<>
						<p>
							A recuperação de crédito é um dos pilares fundamentais para a saúde financeira de uma
							empresa, e no Picpay não é diferente. Com o crescimento exponencial da base de
							usuários, a recuperação de crédito se tornou um desafio cada vez maior, e a
							necessidade de desenvolver novas soluções para garantir a sustentabilidade do negócio
							se tornou evidente.
						</p>
						<p>
							Desenvolver, manutenir e garantir o traqueamento e observabilidade dos canais de
							recuperação de crédito no Picpay, impactando positivamente milhares de usuários todos
							os dias
						</p>
					</>
				}
			/>
			<Accordion />
			<Accordion />
		</div>
	);
};

export default ProjectsV3;
