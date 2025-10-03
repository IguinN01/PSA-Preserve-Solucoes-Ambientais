import React from "react";
import { Check, Star } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { telefone, plans } from "../../data/PrecosData";
import styles from "./Precos.module.css";

const Precos = () => {
  return (
    <section id="planos" className={styles.section}>
      <div className={styles.container}>

        <SectionHeader
          title="Nossos Planos"
          subtitle="Escolha o plano ideal para suas necessidades"
        />

        <div className={styles.grid}>
          {plans.map((plan, index) => {
            const mensagemPlano = `Olá! Gostaria de saber mais sobre o ${plan.name}.`;
            const linkPlanoWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(
              mensagemPlano
            )}`;

            return (
              <div
                key={index}
                className={`${styles.card} ${plan.popular ? styles.popularCard : ""
                  }`}
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
          })}
        </div>

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