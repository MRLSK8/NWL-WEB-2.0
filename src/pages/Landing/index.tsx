import React from 'react';

import landingImage from '../../assets/images/landing.svg';
import logoImage from '../../assets/images/logo.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImage} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
          <img
            src={landingImage}
            alt='plataforma de estudos'
            className='hero-image'
          />
          <div className='buttons-container'>
            <a href='/teste' className='study'>
              <img src={studyIcon} alt='Estudar' />
              Estudar
            </a>
            <a href='/teste2' className='give-classes'>
              <img src={giveClassIcon} alt='Dar aulas' />
              Estudar
            </a>
          </div>

          <span className='total-connections'>
            Total de 200 conexões já realizadas{' '}
            <img src={purpleHeartIcon} alt='Coração roxo' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;