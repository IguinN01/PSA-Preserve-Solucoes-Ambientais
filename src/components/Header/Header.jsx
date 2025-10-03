import { useState } from "react";
import React from 'react';
import { Leaf, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const telefone = "5511942957858";
  const mensagemPadrao = "Olá! Gostaria de mais informações sobre a Preserve Soluções Ambientais.";
  const linkWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <header className={styles.cabecalho}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#home" className={styles.logo}>
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
            <a className={styles.remover_1024} href="#servicos">Serviços</a>
            <a href="#sobre-nos">Sobre Nós</a>
            <a href="#produtos">Produtos</a>
            <a href="#planos">Planos</a>
            <a href="#clientes">Depoimentos</a>
            <a href="#seguranca">Segurança</a>
          </div>
        </div>

        <div className={styles.botoes}>
          <a
            className={styles.botaoContato}
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </div>

        <div className={styles.menuHamburguer} onClick={toggleMenu}>
          {menuAberto ? <X /> : <Menu />}
        </div>

        {menuAberto && (
          <div className={styles.menuMobile}>
            <div className={styles.opcoesMobile}>
              <a href="#servicos" onClick={toggleMenu}>Serviços</a>
              <a href="#sobre-nos" onClick={toggleMenu}>Sobre Nós</a>
              <a href="#produtos" onClick={toggleMenu}>Produtos</a>
              <a href="#planos" onClick={toggleMenu}>Planos</a>
              <a href="#clientes" onClick={toggleMenu}>Depoimentos</a>
              <a href="#seguranca" onClick={toggleMenu}>Segurança</a>
              <a
                className={styles.botaoContato}
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Cabecalho);