import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Check, Star } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { telefone, plans } from "../../data/PrecosData";
import styles from "./Precos.module.css";

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

  const renderPlanCard = (plan, index) => {
    const mensagemPlano = `Olá! Gostaria de saber mais sobre o ${plan.name}.`;
    const linkPlanoWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(
      mensagemPlano
    )}`;

    return (
      <div
        key={index}
        className={`${styles.card} ${plan.popular ? styles.popularCard : ""}`}
      >
        {plan.popular && (
          <div className={styles.ribbon}>
            <Star size={16} /> <span>{plan.discount}</span>
          </div>
        )}

        <h3 className={plan.popular ? styles.titlePopular : ""}>{plan.name}</h3>

        <ul className={styles.features}>
          {plan.description.map((item, i) => (
            <li key={i}>
              <div
                className={`${styles.iconWrapper} ${plan.popular ? styles.iconPopular : ""
                  }`}
              >
                <Check
                  size={16}
                  className={
                    plan.popular ? styles.iconCheckPopular : styles.iconCheck
                  }
                />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={linkPlanoWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${plan.popular ? styles.buttonPopular : ""
            }`}
        >
          Contratar
        </a>
      </div>
    );
  };

  return (
    <section id="planos" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          title="Nossos Planos"
          subtitle="Escolha o plano ideal para suas necessidades"
        />

        {isMobile ? (
          <Slider {...carouselSettings}>
            {plans.map((plan, index) => (
              <div className={styles.carrosselPlanos}>
                <div key={index}>{renderPlanCard(plan, index)}</div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.grid}>
            {plans.map((plan, index) => renderPlanCard(plan, index))}
          </div>
        )}

        <div className={styles.footer}>
          <p>
            Todos os planos incluem atendimento 24h e produtos ecológicos. <br />
            Formas de pagamento: dinheiro ou pix. <br />
            A proposta terá validade de 30 dias. <br />
            Será entregue certificado de garantia após a realização dos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Precos);