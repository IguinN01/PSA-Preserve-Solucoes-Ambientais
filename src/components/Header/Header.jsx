import { useState } from "react";
import React from 'react';
import { Leaf, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleLinkClick = (e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (menuAberto) {
      toggleMenu();
    }
  };

  const telefone = "5511942957858";
  const mensagemPadrao = "Olá! Gostaria de mais informações sobre a Preserve Soluções Ambientais.";
  const linkWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <header className={`${styles.cabecalho} ${menuAberto ? styles.menuAberto : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#home" className={styles.logo} onClick={(e) => handleLinkClick(e, '#home')}>
            <div className={styles.logoIcone}>
              <Leaf className={styles.iconeFolha} />
            </div>
            <div className={styles.logoTexto}>
              <h1 className={styles.logoTitulo}>PSA</h1>
              <p className={styles.logoSubtitulo}>
                Preserve Soluções Ambientais
              </p>
            </div>
          </a>
        </div>

        <div className={styles.menuDesktop}>
          <div className={styles.opcoes}>
            <a className={styles.remover_1024} href="#servicos" onClick={(e) => handleLinkClick(e, '#servicos')}>Serviços</a>
            <a href="#sobre-nos" onClick={(e) => handleLinkClick(e, '#sobre-nos')}>Sobre Nós</a>
            <a href="#produtos" onClick={(e) => handleLinkClick(e, '#produtos')}>Produtos</a>
            <a href="#planos" onClick={(e) => handleLinkClick(e, '#planos')}>Planos</a>
            <a href="#clientes" onClick={(e) => handleLinkClick(e, '#clientes')}>Depoimentos</a>
            <a href="#seguranca" onClick={(e) => handleLinkClick(e, '#seguranca')}>Segurança</a>
          </div>
        </div>

        <div className={styles.botoes}>
          <a
            className={`${styles.botaoContato} ${styles.remover_820}`}
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </div>

        <div className={styles.menuHamburguer} onClick={toggleMenu}>
          <div className={`${styles.iconeMenu} ${menuAberto ? styles.aberto : ''}`}>
            {menuAberto ? <X size={32} /> : <Menu size={32} />}
          </div>
        </div>

        <div className={`${styles.menuMobile} ${menuAberto ? styles.aberto : ''}`}>
          <div className={`${styles.opcoesMobile} ${styles.opcoes}`}>
            <a href="#servicos" onClick={(e) => handleLinkClick(e, '#servicos')}>Serviços</a>
            <a href="#sobre-nos" onClick={(e) => handleLinkClick(e, '#sobre-nos')}>Sobre Nós</a>
            <a href="#produtos" onClick={(e) => handleLinkClick(e, '#produtos')}>Produtos</a>
            <a href="#planos" onClick={(e) => handleLinkClick(e, '#planos')}>Planos</a>
            <a href="#clientes" onClick={(e) => handleLinkClick(e, '#clientes')}>Depoimentos</a>
            <a href="#seguranca" onClick={(e) => handleLinkClick(e, '#seguranca')}>Segurança</a>
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default React.memo(Cabecalho);