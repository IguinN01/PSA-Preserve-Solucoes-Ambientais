import React from "react";
import { Shield, Phone, ArrowRight } from "lucide-react";
import WhatsappLink from "../WhatsappLink/WhatsappLink";
import Reveal from "../Reveal/Reveal";
import styles from "./Hero.module.css";

const Hero = () => {

  const handleLinkClick = (e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/imgs/HeroNew.webp"
          alt="Profissional aplicando produto em ambiente residencial"
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`${styles.container} ${styles.gridContainer}`}>

        <Reveal delay={100} className={styles.leftContent}>
          <span className={styles.badge}>Referência em São Paulo</span>

          <h1 className={styles.title}>
            Soluções Profissionais em <br className={styles.breakMobile} />
            <span className={styles.highlight}>Controle de Pragas</span>
          </h1>

          <p className={styles.subtitle}>
            Segurança, eficiência e respeito ao meio ambiente. Proteja sua família e seu patrimônio com nossos serviços especializados.
          </p>

          <div className={styles.buttons}>
            <a
              href="#equipe"
              onClick={(e) => handleLinkClick(e, '#equipe')}
              className={`${styles.btn} ${styles.btnPrimary} hover-gelatina`}
            >
              Conheça Nossa Equipe <ArrowRight size={20} />
            </a>

            <WhatsappLink
              mensagem="Olá! Encontrei uma praga em minha casa e gostaria de ajuda para identificar e resolver o problema."
              className={`${styles.btn} ${styles.btnOutline} hover-gelatina`}
            >
              <Phone size={20} /> Identificar Praga
            </WhatsappLink>
          </div>
        </Reveal>

        <Reveal delay={300} className={styles.rightContent}>
          <div className={`${styles.glassCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Shield className={styles.icon} aria-hidden="true" />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Garantia Total</h3>
                <p className={styles.cardSubtitle}>Serviço certificado</p>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>+10 Anos</div>
                <div className={styles.statLabel}>De experiência no mercado</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>24h</div>
                <div className={styles.statLabel}>Atendimento emergencial</div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default (Hero);