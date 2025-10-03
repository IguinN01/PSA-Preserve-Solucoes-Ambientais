import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider}></div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default React.memo(SectionHeader);