import React, { Children } from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImage from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={backIcon} alt='Voltar' />
        </Link>
        <img src={logoImage} alt='proffy' />
      </div>
      <div className='header-content'>
        <strong>{title}</strong>
        <strong>{children}</strong>
      </div>
    </header>
  );
};

export default PageHeader;
