import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            Introdução
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-150} duration={500}>
            Noticias
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            I.A
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Conheça
          </Link>
        </li>
        <li>
          <button className="btn">
            <RouterLink to="/jogo">Jogar</RouterLink>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
