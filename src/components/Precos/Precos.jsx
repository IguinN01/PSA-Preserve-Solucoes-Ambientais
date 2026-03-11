import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Check, Star } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { plans } from "../../data/PrecosData";
import styles from "./Precos.module.css";
import WhatsappLink from "../WhatsappLink/WhatsappLink";

const Precos = () => {
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
    initialSlide: 0,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderPlanCard = (plan) => {
    return (
      <div
        className={`${styles.card} ${plan.popular ? styles.cardPopular : styles.cardStandard}`}
      >
        {plan.popular && (
          <div className={styles.ribbon}>
            <Star size={16} fill="currentColor" /> <span>{plan.discount}</span>
          </div>
        )}

        <h3
          className={`${styles.cardTitle} ${plan.popular ? styles.cardTitlePopular : styles.cardTitleStandard}`}
        >
          {plan.name}
        </h3>

        <ul className={styles.featuresList}>
          {plan.description.map((item, i) => (
            <li key={i} className={styles.featureItem}>
              <div
                className={`${styles.iconWrapper} ${plan.popular ? styles.iconPopular : styles.iconStandard}`}
              >
                <Check
                  size={16}
                  strokeWidth={3}
                  className={plan.popular ? styles.iconCheckPopular : styles.iconCheckStandard}
                />
              </div>
              <span
                className={
                  plan.popular
                    ? styles.featureTextPopular
                    : styles.featureTextStandard
                }
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        <WhatsappLink
          mensagem={`Olá! Gostaria de saber mais sobre o ${plan.name}.`}
          className={`${styles.button} ${plan.popular ? styles.buttonPopular : styles.buttonStandard}`}
        >
          Contratar Plano
        </WhatsappLink>
      </div>
    );
  };

  return (
    <section id="planos" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          title="Nossos Planos"
          subtitle="Escolha o plano ideal para garantir proteção contínua às suas necessidades"
        />

        {isMobile ? (
          <Slider {...carouselSettings}>
            {plans.map((plan, index) => (
              <div key={index} className={styles.carrosselPlanos}>
                <div>{renderPlanCard(plan)}</div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.grid}>
            {plans.map((plan, index) => (
              <div key={index}>{renderPlanCard(plan)}</div>
            ))}
          </div>
        )}

        <div className={styles.footerBox}>
          <p>Todos os planos incluem atendimento 24h e produtos ecológicos.</p>
          <p>Formas de pagamento: Dinheiro ou PIX.</p>
          <p>A proposta técnica e comercial terá validade de 30 dias.</p>
          <p className={styles.footerHighlight}>
            Será entregue certificado de garantia após a realização dos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Precos;