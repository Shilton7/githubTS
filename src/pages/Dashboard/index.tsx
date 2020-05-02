import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/img/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8092749?s=460&u=c9a97ce63ab9829ee489cbe7bdb6d48129bb8081&v=4"
            alt="logo_avatar"
          />

          <div>
            <strong>rocketshoes</strong>
            <p>Clone project of Netshoes using React and Redux (web)</p>
          </div>

          <FiChevronRight size={25} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8092749?s=460&u=c9a97ce63ab9829ee489cbe7bdb6d48129bb8081&v=4"
            alt="logo_avatar"
          />

          <div>
            <strong>rocketshoes</strong>
            <p>Clone project of Netshoes using React and Redux (web)</p>
          </div>

          <FiChevronRight size={25} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8092749?s=460&u=c9a97ce63ab9829ee489cbe7bdb6d48129bb8081&v=4"
            alt="logo_avatar"
          />

          <div>
            <strong>rocketshoes</strong>
            <p>Clone project of Netshoes using React and Redux (web)</p>
          </div>

          <FiChevronRight size={25} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
