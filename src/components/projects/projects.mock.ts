import PicpayProject from "./pic-projects/lp-picpay.png";
import superfoodProject from "./pic-projects/superfood-mockup.png";

//textos de descrição não deverão passar de 125 caracteres

export const projects = [
	{
		title: `Recuperação de crédito PicPay`,
		description: `A recuperação de crédito é fundamental para a saúde financeira de uma empresa, 
			e no Picpay não é diferente.`,
		picture: PicpayProject,
		Link: "http://renegociacao.picpay.com",
	},
	{
		title: `Gerenciamento de arquivos Superfood`,
		description: `Sistema de gerenciamento de arquivos integrado ao Google Drive.`,
		picture: superfoodProject,
		Link: "/projeto-superfood",
	},
];
