import React from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-scroll';

import images from '../../constants/images';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1>
          Aqui, a sua dieta é equilibrada:
          <span>você sai com um pão de queijo em cada mão.</span>
        </h1>
        <p>
          Você não pode comer aqui apenas uma vez.
          <span>
            O caminho da felicidade tem o endereço da nossa lanchonete!
          </span>
        </p>

        <Link
          className="btn btn__btn-dark pulse"
          activeClass="active"
          to="menu"
          spy={true}
          smooth={true}
          duration={500}>
          Ver Menu
          <MdOutlineRestaurantMenu
            fill="#fff"
            size={30}
            className="btn__btn-icon"
          />
        </Link>
      </div>
      <div className="header-banner">
        <img
          src={images.banner}
          alt="Uma mulher negra feliz de jaqueta amarela, comendo uma fatia de bolo."
        />
      </div>
    </header>
  );
};

export default Header;
