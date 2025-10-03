import React from "react";
import { CheckCircle } from "lucide-react";
import { securitySteps } from "../../data/SegurancaData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Seguranca.module.css";

const Seguranca = () => {
  return (
    <section id="seguranca" className={styles.section}>
      <div className={styles.container}>

        <SectionHeader
          title="Medidas de Segurança"
          subtitle="Procedimentos para garantir sua segurança"
        />

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          <div className={styles.steps}>
            {securitySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepIcon}>
                    <IconComponent className={styles.iconSvg} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {securitySteps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.procedures}>
                {step.procedures.map((procedure, procIndex) => (
                  <div key={procIndex} className={styles.procedureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <p className={styles.procedureText}>{procedure}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Seguranca);