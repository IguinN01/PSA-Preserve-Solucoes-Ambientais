import React from "react";
import { services, features } from "../../data/ServicosData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Servicos.module.css";

const Services = () => {
  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className={styles.container}>

        <SectionHeader
          title="Nossos Serviços"
          subtitle="Soluções completas e personalizadas para sua segurança e tranquilidade"
        />

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <service.icon className={`${styles.icon} ${styles[service.color]}`} />
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <p className={styles.cardDetails}>{service.details}</p>

            </div>
          ))}
        </div>

        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Por que escolher a PSA?</h3>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  <feature.icon className={styles.featureIcon} />
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);