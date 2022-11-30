import React from 'react';
import { useState, useEffect } from 'react';
import images from '../../constants/images';
import { Card } from '../Card/Card';
import JsonData from '../../data/data.json';

import './Main.css';

const Main = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [showCategory, setShowCategory] = useState('sanduiches');
  const activeStyle = {
    backgroundColor: `var(--secondary-color)`,
    color: `var(--text-color-light)`,
  };
  const activeStyleIcon = { backgroundColor: `#ffffff` };

  return (
    <main className="main">
      <section id="services">
        <h2>O que servimos</h2>
        <p>Seu parceiro favorito de entrega de comida</p>
        <div className="section__services">
          <div>
            <img
              src={images.orderFood}
              alt="Desenho de uma mulher sentada em uma poltrona e fazendo seu pedido pelo aplicativo."
            />
            <h3>Fácil de Pedir</h3>
            <p>Você só precisa de alguns passos para pedir comida</p>
          </div>
          <div>
            <img
              src={images.delivery}
              alt="Desenho de um homem fazendo uma entrega de moto (delivery)."
            />
            <h3>Entrega Mais Rápida</h3>
            <p>Entrega sempre pontual e mais rápida</p>
          </div>
          <div>
            <img
              src={images.waiters}
              alt="Desenho de dois garçons, uma mulher e um homem."
            />
            <h3>Melhor Qualidade</h3>
            <p>Não apenas rápido, para nós a qualidade também é o número um</p>
          </div>
        </div>
      </section>
      <section id="menu">
        <h2>Nosso Cardápio</h2>
        <p>Cardápio que sempre faz você se apaixonar</p>
        <div className="section__menu">
          <ul className="section__menu__navbar">
            <li>
              <a
                onClick={() => setShowCategory('sanduiches')}
                style={showCategory === 'sanduiches' ? activeStyle : {}}>
                <span
                  style={showCategory === 'sanduiches' ? activeStyleIcon : {}}>
                  &#129386;
                </span>{' '}
                Sanduíches
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCategory('paes')}
                style={showCategory === 'paes' ? activeStyle : {}}>
                <span style={showCategory === 'paes' ? activeStyleIcon : {}}>
                  &#127838;
                </span>{' '}
                Pães
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCategory('doces')}
                style={showCategory === 'doces' ? activeStyle : {}}>
                <span style={showCategory === 'doces' ? activeStyleIcon : {}}>
                  &#129473;
                </span>{' '}
                Doces
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCategory('bebidas')}
                style={showCategory === 'bebidas' ? activeStyle : {}}>
                <span style={showCategory === 'bebidas' ? activeStyleIcon : {}}>
                  &#129380;
                </span>{' '}
                Bebidas
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCategory('salgados')}
                style={showCategory === 'salgados' ? activeStyle : {}}>
                <span
                  style={showCategory === 'salgados' ? activeStyleIcon : {}}>
                  &#129375;
                </span>{' '}
                Salgados
              </a>
            </li>
          </ul>
          <div className="section__menu__content">
            {showCategory === 'sanduiches' && (
              <Card data={landingPageData.Sanduiches} />
            )}
            {showCategory === 'paes' && <Card data={landingPageData.Paes} />}
            {showCategory === 'doces' && <Card data={landingPageData.Doces} />}
            {showCategory === 'bebidas' && (
              <Card data={landingPageData.Bebidas} />
            )}
            {showCategory === 'salgados' && (
              <Card data={landingPageData.Salgados} />
            )}
          </div>
        </div>
      </section>
      <section id="about">
        <h2>Sobre Nós</h2>
        <p>Missão, Visão e Valores </p>
        <div>
          <h3>Missão</h3>
          <p>
            Produzir e comercializar alimentos tradicionais e personalizados, de
            qualidade e excelência que satisfaçam a necessidade de nossos
            clientes, oferecendo uma variedade de produtos, prestando um
            excelente atendimento e disponibilizando um ambiente acolhedor,
            aconchegante e agradável.
          </p>
          <h3>Visão</h3>
          <p>
            Ser uma das principais referências no ramo alimentício e garantir a
            qualidade dos produtos, satisfação dos clientes e reconhecimento da
            marca.
          </p>
          <h3>Valores</h3>
          <ul>
            <li>Ética, honestidade e transparência.</li>
            <li>Qualidade e responsabilidade.</li>
            <li>Excelência no atendimento ao cliente.</li>
            <li>Trabalho em equipe.</li>
            <li>Desenvolvimento sustentável.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
