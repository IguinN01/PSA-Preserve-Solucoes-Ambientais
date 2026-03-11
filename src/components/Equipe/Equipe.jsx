import React from "react";
import { Shield, UserRound } from 'lucide-react';
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Equipe.module.css";
import { teamMembers } from "../../data/EquipeData";

const Equipe = () => {
  return (
    <section id="equipe" className={styles.teamSection}>
      <div className={styles.container}>
        <SectionHeader
          title="Nossa Equipe Especializada"
          subtitle="Profissionais experientes e qualificados para garantir os melhores resultados em controle de pragas e soluções ambientais."
        />

        <div className={styles.grid}>
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div key={index} className={styles.card}>

                <div className={styles.imageContainer}>
                  <div className={styles.pulseBackground}></div>
                  <div className={styles.iconInner}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <div className={styles.badge}>
                    {member.experience}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{member.name}</h3>
                <p className={styles.description}>{member.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default (Equipe);