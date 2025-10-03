import React from "react";
import { Quote } from "lucide-react";
import { clients, testimonials } from "../../data/DepoimentosData";
import styles from "./Depoimentos.module.css";

const Depoimentos = () => {
  return (
    <section id="clientes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.block}>
          <h2 className={styles.title}>Nossos Clientes</h2>
          <div className={styles.separator}></div>
          <div className={styles.clientsGrid}>
            {clients.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.subtitle}>Depoimentos</h3>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteWrapper}>
                  <div className={styles.quoteCircle}>
                    <Quote className={styles.quoteIcon} />
                  </div>
                </div>

                <div className={styles.testimonialContent}>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className={styles.star}></div>
                    ))}
                  </div>

                  <p className={styles.text}>"{testimonial.text}"</p>

                  <div>
                    <div className={styles.author}>{testimonial.name}</div>
                    <div className={styles.company}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Depoimentos);