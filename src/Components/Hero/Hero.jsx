import React from 'react';
import { Link } from 'react-scroll'; // Importar o Link para rolagem suave
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

export const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Transforme o Mundo com a Reciclagem</h1>
        <p>
          Junte-se a nós na luta contra o desperdício e faça a diferença. Descubra como a reciclagem pode mudar o futuro do nosso planeta e como você pode contribuir para um mundo mais sustentável.
        </p>
        {/* Usando o Link para rolar suavemente até a seção desejada */}
        <Link to="about" smooth={true} offset={-100} duration={500} className="btn">
          Saiba Mais
          <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
