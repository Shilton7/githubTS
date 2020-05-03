import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/img/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParamsDTO {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamsDTO>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={15} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/8092749?s=460&u=c9a97ce63ab9829ee489cbe7bdb6d48129bb8081&v=4"
            alt=""
          />
          <div>
            <strong>{params.repository}</strong>
            <p>description</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1000</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>50</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>60</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>item 1</strong>
            <p>item 2</p>
          </div>

          <FiChevronRight size={25} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
