import React from "react";
import { products } from "../../data/ProdutosData";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section id="produtos" className={styles.productsSection}>
      <div className={styles.backgroundPattern}></div>

      <div className={styles.container}>
        <SectionHeader
          title="Produtos Utilizados"
          subtitle="Produtos confiáveis e de baixa toxicidade"
          light={true}
        />

        <div className={styles.grid}>
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default (Produtos);