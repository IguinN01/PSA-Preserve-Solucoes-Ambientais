import React from 'react';
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.colSpan2}>
              <div className={styles.logoBox}>
                <div className={styles.logoIcon}>
                  <Leaf className={styles.iconWhite} />
                </div>
                <div>
                  <h3 className={styles.title}>PSA</h3>
                  <p className={styles.subtitle}>Preserve Soluções Ambientais</p>
                </div>
              </div>

              <p className={styles.description}>
                Há mais de 10 anos oferecendo soluções profissionais em controle de pragas,
                higienização de reservatórios e limpeza de piscinas com foco na sustentabilidade
                e segurança.
              </p>

              <div className={styles.socials}>
                <a
                  href="https://wa.me/5511942957858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <svg
                    className={styles.socialIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
                <a
                  href="mailto:preservecontroledepragas@gmail.com?subject=Contato%20pelo%20Site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Mail className={styles.socialIcon} />
                </a>
              </div>
            </div>

            <div>
              <h4 className={styles.sectionTitle}>Links Rápidos</h4>
              <ul className={styles.links}>
                <li><a href="#home" className={styles.link}>Home</a></li>
                <li><a href="#services" className={styles.link}>Serviços</a></li>
                <li><a href="#about" className={styles.link}>Sobre Nós</a></li>
                <li><a href="#plans" className={styles.link}>Planos</a></li>
                <li><a href="#contact" className={styles.link}>Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className={styles.sectionTitle}>Contato</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} />
                  <span className={styles.textMuted}>(11) 3912-7815 / (11) 9224-7589</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} />
                  <span className={`${styles.textMuted} ${styles.correcao}`}>
                    preservecontroledepragas@gmail.com
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} />
                  <div>
                    <div className={styles.textMuted}>São Paulo - SP</div>
                    <div className={styles.textSmall}>Atendimento em toda região</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.containerBottom}>
          <div className={styles.copy}>
            © {currentYear} PSA - Preserve Soluções Ambientais. Todos os direitos reservados.
          </div>
          <div className={styles.copy}>
            CNPJ: XX.XXX.XXX/XXXX-XX
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);