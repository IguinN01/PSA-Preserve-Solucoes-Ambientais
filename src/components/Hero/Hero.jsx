import React from "react";
import styles from "./Hero.module.css";
import heroImageWebP from "/imgs/hero-bg.webp";
import heroImageJpg from "/imgs/hero-bg.jpg";

const Hero = () => {
  const telefone = "5511942957858";
  const mensagemPadrao = "Olá! Gostaria de agendar uma visita com vocês.";
  const linkWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <picture>
          <source srcSet={heroImageWebP} type="image/webp" />
          <source srcSet={heroImageJpg} type="image/jpeg" />
          <img src={heroImageJpg} alt="Profissional aplicando produto de controle de pragas" />
        </picture>
        <div className={styles.overlay}></div>
      </div>


      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            Soluções Profissionais em{" "}
            <span className={styles.highlight}>Controle de Pragas</span>
          </h1>

          <p className={styles.subtitle}>
            Segurança, eficiência e respeito ao meio ambiente. Proteja sua
            família e seu patrimônio com nossos serviços especializados.
          </p>

          <div className={styles.buttons}>
            <a href="#contato" className={`${styles.btn} ${styles.btnPrimary}`}>
              Solicitar Orçamento
            </a>
            <a href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnOutline}`}>
              Agende uma Visita
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>+10</div>
              <div className={styles.statText}>Anos de Experiência</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statText}>Produtos Eficientes</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24h</div>
              <div className={styles.statText}>Atendimento</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);