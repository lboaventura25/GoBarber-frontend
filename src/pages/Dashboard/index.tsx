import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const DashBoard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49161615?v=4"
            alt="Lucas Boaventura"
          />
          <div>
            <strong>Lucas Boaventura</strong>
            <p>Desenvolvedor de Software</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49161615?v=4"
            alt="Lucas Boaventura"
          />
          <div>
            <strong>Lucas Boaventura</strong>
            <p>Desenvolvedor de Software</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49161615?v=4"
            alt="Lucas Boaventura"
          />
          <div>
            <strong>Lucas Boaventura</strong>
            <p>Desenvolvedor de Software</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default DashBoard;
