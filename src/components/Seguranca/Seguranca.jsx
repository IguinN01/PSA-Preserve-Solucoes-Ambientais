import React from "react";
import { CheckCircle } from "lucide-react";
import { securitySteps } from "../../data/SegurancaData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Seguranca.module.css";

const Seguranca = () => {
  return (
    <section id="seguranca" className={styles.section}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.container}>
        <SectionHeader
          title="Medidas de Segurança"
          subtitle="Procedimentos para garantir sua segurança"
        />

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineLineMobile}></div>

          <div className={styles.stepsGrid}>
            {securitySteps.map((step, index) => {
              const IconComponent = step.icon;

              const numberColorClass =
                index === 0 ? styles.bgDarkGreen :
                  index === 1 ? styles.bgTeal :
                    styles.bgEmerald;

              return (
                <div key={index} className={styles.stepItem}>
                  <div className={`${styles.stepNumber} ${numberColorClass}`}>
                    {step.number}
                  </div>

                  <h4 className={styles.stepTitle}>{step.title}</h4>

                  <div className={styles.card}>
                    <IconComponent className={styles.cardIcon} />
                    <ul className={styles.procedureList}>
                      {step.procedures.map((procedure, procIndex) => (
                        <li key={procIndex} className={styles.procedureItem}>
                          <CheckCircle className={styles.checkIcon} />
                          <span>{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default (Seguranca);