import React from "react";
import { teamMembers } from "../../data/EquipeData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Equipe.module.css";

const Equipe = () => {
  return (
    <section id="equipe" className={styles.teamSection}>
      <div className={styles.container}>

        <SectionHeader
          title="Nossa Equipe Especializada"
          subtitle="Profissionais experientes e qualificados para garantir os melhores
            resultados em controle de pragas e soluções ambientais"
        />

        <div className={styles.grid}>
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{member.name}</h3>
                  <span className={styles.badge}>{member.experience}</span>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.description}>{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Equipe);