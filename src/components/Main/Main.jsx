import React from 'react';
import images from '../../constants/images';

import './Main.css';

const Main = () => {
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
          <ul>
            <li>
              <a href="#">🍔 Hamburguer</a>
            </li>
            <li>
              <a href="#">🍕 Pizza</a>
            </li>
            <li>
              <a href="#">🧁 Cupcake</a>
            </li>
            <li>
              <a href="#">🍜 Ramen</a>
            </li>
            <li>
              <a href="#">🍧 Ice Cream</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
