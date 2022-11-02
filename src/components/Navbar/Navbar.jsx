import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-scroll';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}>
          <img src={images.logo} alt="App logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            duration={500}>
            Menu
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}>
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          fill="#eb5757"
          size={50}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fill="#eb5757"
              size={50}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-smallscreen_links">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setToggleMenu(false)}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setToggleMenu(false)}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
