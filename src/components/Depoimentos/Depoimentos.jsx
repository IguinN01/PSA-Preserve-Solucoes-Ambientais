import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Quote } from "lucide-react";
import { clients, testimonials } from "../../data/DepoimentosData";
import styles from "./Depoimentos.module.css";

const Depoimentos = () => {
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

  const renderTestimonialCard = (testimonial, index) => (
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
  );

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
          {isMobile ? (
            <Slider {...carouselSettings}>
              {testimonials.map((testimonial, index) => (
                <div className={styles.carrosselDepoimentos}>
                  <div key={index}>{renderTestimonialCard(testimonial, index)}</div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial, index) =>
                renderTestimonialCard(testimonial, index)
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Depoimentos);