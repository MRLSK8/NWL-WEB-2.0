import React from 'react';

import './styles.css';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/39857752?s=460&u=1e0dd14e0e4b597d28e5b409377fbd2aee1d37a8&v=4'
          alt='Marcelo Lima'
        />
        <div>
          <strong>Marcelo Lima</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsapp} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
