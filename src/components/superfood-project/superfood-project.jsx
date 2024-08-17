import React from "react";
import "./superfood-project.scss";
import loginPic from "../projects/pic-projects/superfood/login.png";
import createDocPic from "../projects/pic-projects/superfood/create-document.png";
import editDocPic from "../projects/pic-projects/superfood/edit-document.png";
import clientsPic from "../projects/pic-projects/superfood/clients.png";
import docPic from "../projects/pic-projects/superfood/documents.jpg";

const SuperfoodProject = () => {
	return (
		<div className="main-container">
			<div className="content">
				<h1>Projeto Superfood</h1>

				<h2>Visão Geral</h2>
				<p>
					O projeto <strong>Superfood</strong> é uma solução completa de gestão de documentos para a
					empresa Superfood, integrando frontend e backend com uma API em Node.js que realiza a
					integração com o Google Drive. O sistema foi desenvolvido para atender às necessidades
					específicas da empresa, proporcionando uma interface amigável e um backend robusto para a
					gestão eficiente de documentos e clientes.
				</p>

				<h2>Funcionalidades Principais</h2>

				<h3>Autenticação</h3>
				<p>
					A autenticação no sistema é realizada utilizando a tecnologia <strong>OAuth2.0</strong> do
					Google, garantindo segurança e facilidade de uso.
				</p>

				<h3>Perfis de Acesso</h3>
				<ul>
					<li>
						<strong>Admin:</strong> O perfil de administrador tem acesso a todas as funcionalidades
						do sistema, incluindo a gestão de documentos e clientes.
					</li>
					<li>
						<strong>Usuário Padrão:</strong> O usuário padrão pode visualizar as pendências de
						documentos atribuídas a ele e realizar o envio dos documentos necessários.
					</li>
				</ul>

				<h3>Gestão de Documentos</h3>

				<h4>Parte do Admin</h4>
				<ul>
					<li>
						<strong>CRUD de Pendências:</strong> O administrador pode criar, visualizar, atualizar e
						excluir pendências de documentos.
					</li>
					<li>
						<strong>Recusa de Documentos:</strong> Após o envio de um documento pelo usuário, o
						administrador pode recusar o documento caso haja alguma pendência.
					</li>
					<li>
						<strong>Filtros Especiais:</strong> O administrador tem acesso a filtros especiais que
						facilitam o gerenciamento dos usuários e dos documentos.
					</li>
				</ul>

				<h4>Parte do Usuário</h4>
				<ul>
					<li>
						<strong>Visualização de Pendências:</strong> Os usuários podem visualizar todas as
						pendências de documentos que foram atribuídas a eles.
					</li>
					<li>
						<strong>Envio de Documentos:</strong> Os usuários podem enviar documentos em qualquer
						formato aceito pelo Google Drive. Após o envio, o documento é automaticamente atualizado
						no banco de dados e organizado no Google Drive.
					</li>
				</ul>

				<h3>Estrutura de Armazenamento</h3>
				<p>
					Os documentos são organizados automaticamente no Google Drive seguindo a estrutura:{" "}
					<strong>Setor &gt; Cliente &gt; Ano &gt; Mês &gt; Dia</strong>, facilitando a manutenção e
					correções pela equipe da Superfood.
				</p>

				<h3>Gestão de Clientes (Admin)</h3>
				<ul>
					<li>
						<strong>CRUD de Clientes:</strong> O administrador pode gerenciar todos os clientes da
						Superfood, incluindo o cadastro de novos clientes, concessão de acesso ao sistema,
						desativação e reativação de clientes.
					</li>
				</ul>

				<h2>Screenshots</h2>

				<h3>Área de Login</h3>
				<img src={loginPic} alt="Área de Login" style={{ width: "100%" }} />
				<h3>Gerenciamento de Documentos</h3>
				<img src={docPic} alt="Gerenciar Documentos" style={{ maxWidth: "100%" }} />

				<h3>Criar Atividade</h3>
				<img src={createDocPic} alt="Criar Atividade" style={{ maxWidth: "100%" }} />

				<h3>Editar Documento</h3>
				<img src={editDocPic} alt="Editar Documento" style={{ maxWidth: "100%" }} />

				<h3>Gestão de Clientes</h3>
				<img src={clientsPic} alt="Clientes" style={{ maxWidth: "100%" }} />

				<h2>Considerações Finais</h2>
				<p>
					O projeto Superfood foi desenvolvido para simplificar e otimizar a gestão de documentos e
					clientes, utilizando tecnologias modernas e boas práticas de desenvolvimento. Com a
					integração ao Google Drive, o sistema oferece uma solução completa e escalável para as
					necessidades da empresa.
				</p>
			</div>
		</div>
	);
};

export default SuperfoodProject;
