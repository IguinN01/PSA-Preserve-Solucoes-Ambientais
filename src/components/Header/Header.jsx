import React, { useState, useEffect, useRef } from "react";
import { Leaf, Menu, X } from "lucide-react";
import WhatsappLink from "../WhatsappLink/WhatsappLink";
import styles from "./Header.module.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuAberto) {
        setMenuAberto(false);
      }
    };

    const currentDrawer = drawerRef.current;
    const currentToggleBtn = toggleBtnRef.current;

    if (menuAberto) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);

      if (currentDrawer) {
        const focusableElements = currentDrawer.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (firstElement) {
          firstElement.focus();
        }

        const handleTab = (e) => {
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        };

        currentDrawer.addEventListener('keydown', handleTab);

        return () => {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
          document.removeEventListener('keydown', handleKeyDown);

          if (currentDrawer) {
            currentDrawer.removeEventListener('keydown', handleTab);
          }

          if (currentToggleBtn) {
            currentToggleBtn.focus();
          }
        };
      }
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuAberto]);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleLinkClick = (e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (menuAberto) {
      toggleMenu();
    }
  };

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre Nós", href: "#sobre-nos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Planos", href: "#planos" },
    { name: "Depoimentos", href: "#clientes" },
    { name: "Segurança", href: "#seguranca" },
  ];

  return (
    <>
      <div className={`${styles.headerContainerWrapper} ${scrolled ? styles.headerScrolledWrapper : ''}`}>

        <header className={`${styles.headerContent} ${scrolled ? `glass-effect-dark ${styles.headerScrolledContent}` : ''}`}>

          <a href="#home" className={styles.logoContainer} onClick={(e) => handleLinkClick(e, '#home')}>
            <Leaf className={`${styles.leafIcon} ${scrolled ? styles.leafIconScrolled : ''}`} />
            {!scrolled && (
              <span className={`${styles.logoText}`}>
                PSA
              </span>
            )}
          </a>

          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`${styles.navLink} hover-gelatina`}
              >
                {link.name}
              </a>
            ))}
            <WhatsappLink className={`${styles.navButton} hover-gelatina`}>
              Orçamento Rápido
            </WhatsappLink>
          </nav>

          <button
            ref={toggleBtnRef}
            className={`${styles.mobileToggle} hover-gelatina`}
            onClick={toggleMenu}
            aria-label="Abrir menu de navegação"
            aria-expanded={menuAberto}
          >
            <Menu size={32} aria-hidden="true" />
          </button>
        </header>
      </div>

      <div
        className={`${styles.mobileOverlay} ${menuAberto ? styles.overlayAberto : ''}`}
        onClick={toggleMenu}
      />

      <div
        ref={drawerRef}
        className={`${styles.mobileDrawer} ${menuAberto ? styles.drawerAberto : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Menu</span>
          <button
            onClick={toggleMenu}
            className={`${styles.drawerClose} hover-gelatina`}
            aria-label="Fechar menu de navegação"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`${styles.drawerLink} hover-gelatina`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className={styles.drawerFooter}>
          <WhatsappLink style={{ textDecoration: 'none' }}>
            <button className={`${styles.drawerButton} hover-gelatina`}>
              Orçamento Rápido
            </button>
          </WhatsappLink>
        </div>
      </div>
    </>
  );
};

export default Cabecalho;