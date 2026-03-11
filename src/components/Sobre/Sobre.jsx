import React from "react";
import { Timer, Laptop } from "lucide-react";
import styles from "./Sobre.module.css";

const Sobre = () => {

  return (
    <section id="sobre-nos" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.leftColumn}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                alt="Equipe PSA"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.decorCircle1} />
            <div className={styles.decorCircle2} />

            <div className={styles.floatingCard1}>
              <div className={styles.cardHeader}>
                <Timer className={styles.cardIcon} />
                <p className={styles.cardTitle}>Atendimento Ágil</p>
              </div>
              <p className={styles.cardText}>Chegamos rápido.</p>
            </div>

            <div className={styles.floatingCard2}>
              <div className={styles.cardHeader}>
                <Laptop className={styles.cardIcon} />
                <p className={styles.cardTitle}>Tecnologia Moderna</p>
              </div>
              <p className={styles.cardText}>Equipamentos de ponta.</p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <h3 className={styles.subtitle}>Sobre a PSA</h3>
            <h2 className={styles.title}>Compromisso com o meio ambiente e a sua segurança.</h2>

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
          </div>

        </div>
      </div>
    </section>
  );
};

export default (Sobre);