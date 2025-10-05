import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { services, features } from "../../data/ServicosData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Servicos.module.css";

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className={styles.container}>
        <SectionHeader
          title="Nossos Serviços"
          subtitle="Soluções completas e personalizadas para sua segurança e tranquilidade"
        />

        {isMobile ? (
          <Slider {...carouselSettings}>
            {services.map((service, index) => (
              <div>
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>
                    <service.icon
                      className={`${styles.icon} ${styles[service.color]}`}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <p className={styles.cardDetails}>{service.details}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <service.icon
                    className={`${styles.icon} ${styles[service.color]}`}
                  />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>
                  {service.description}
                </p>
                <p className={styles.cardDetails}>{service.details}</p>
              </div>
            ))}
          </div>
        )}

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