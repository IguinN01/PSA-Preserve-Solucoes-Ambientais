import React from "react";
import { features } from "../../data/SobreData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Sobre.module.css";

const Sobre = () => {
  // Adicione esta função
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
    <section id="sobre-nos" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <SectionHeader title="Sobre a PSA" />

            <div className={styles.textBlock}>
              <p>
                A <strong className={styles.highlight}>PSA - Preserve Soluções Ambientais</strong> atua há mais de uma
                década no mercado de controle de pragas e higienização ambiental, oferecendo soluções sustentáveis e
                eficazes para residências e empresas.
              </p>
              <p>
                Nossa equipe é formada por profissionais qualificados e certificados, comprometidos em oferecer o melhor
                atendimento com foco na segurança, saúde e preservação do meio ambiente.
              </p>
              <p>
                Utilizamos produtos de baixa toxicidade e sem cheiro, garantindo a segurança de sua família, funcionários
                e animais de estimação, sempre respeitando as normas ambientais vigentes.
              </p>
            </div>

            <div className={styles.buttonWrapper}>
              {/* Modifique esta linha */}
              <a href="#equipe" className={styles.button} onClick={(e) => handleLinkClick(e, '#equipe')}>
                Conheça Nossa Equipe
              </a>
            </div>
          </div>

          <div className={styles.statsFeatures}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>+8</div>
                <div className={styles.statLabel}>Anos no Mercado</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Clientes Atendidos</div>
              </div>
            </div>

            <div className={styles.featuresList}>
              {features.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.iconWrapper}>
                    <item.icon className={styles.icon} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{item.title}</h4>
                    <p className={styles.featureDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Sobre);