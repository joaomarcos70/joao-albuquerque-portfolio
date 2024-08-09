import React from "react";
import "./projects.scss";

const projects = [
	{
		title: "Picpay - recuperação de crédito",
		description:
			"A recuperação de crédito é um dos pilares fundamentais para a saúde financeira de uma empresa, e no Picpay não é diferente. Com o crescimento exponencial da base de usuários, a recuperação de crédito se tornou um desafio cada vez maior, e a necessidade de desenvolver novas soluções para garantir a sustentabilidade do negócio se tornou evidente.",
	},
	{
		title: "Picpay - recuperação de crédito",
		description:
			"A recuperação de crédito é um dos pilares fundamentais para a saúde financeira de uma empresa, e no Picpay não é diferente. Com o crescimento exponencial da base de usuários, a recuperação de crédito se tornou um desafio cada vez maior, e a necessidade de desenvolver novas soluções para garantir a sustentabilidade do negócio se tornou evidente.",
	},
	{
		title: "Picpay - recuperação de crédito",
		description:
			"A recuperação de crédito é um dos pilares fundamentais para a saúde financeira de uma empresa, e no Picpay não é diferente. Com o crescimento exponencial da base de usuários, a recuperação de crédito se tornou um desafio cada vez maior, e a necessidade de desenvolver novas soluções para garantir a sustentabilidade do negócio se tornou evidente.",
	},
];

const Projects = () => {
	return (
		<>
			{projects.map((project, index) => (
				<div key={index} className="project-item">
					<h1>{"project.title"}</h1>
					<p>{"project.description"}</p>
				</div>
			))}
		</>
	);
};

export default Projects;
