import React from "react";
import { products } from "../../data/ProdutosData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section id="produtos" className={styles.productsSection}>
      <div className={styles.container}>

        <SectionHeader
          title="Produtos Utilizados"
          subtitle="Produtos confiáveis e de baixa toxicidade"
        />

        <div className={styles.grid}>
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <IconComponent
                      className={`${styles.icon} ${styles[product.color]}`}
                    />
                  </div>
                  <div className={styles.cardText}>
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    <p className={styles.cardDescription}>{product.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Produtos);