import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_contact">
        <h2>Contato</h2>
        <div>
          <a
            href="https://www.instagram.com/cafeeconversa2022/"
            alt="Instagram do Café e Conversa"
            target="_blank">
            <FaInstagram size={30} className="instagram_icon" />
            Instagram
          </a>
          <a
            href="https://wa.me/5534988457445"
            alt="WhatsApp do Café e Conversa"
            target="_blank">
            <FaWhatsapp size={30} className="whatsapp_icon" />
            WhatsApp
          </a>
        </div>
      </div>
      <p>
        <small>Feito com ❤️ pela equipe Café e Conversa.</small>
      </p>
    </footer>
  );
};

export default Footer;
