import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Quote, Star, StarHalf } from "lucide-react";
import { testimonials } from "../../data/DepoimentosData";
import SectionHeader from "../SectionHeader/SectionHeader";
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

  const renderTestimonialCard = (testimonial) => (
    <div className={styles.card}>
      <Quote className={styles.bgQuote} />

      <div className={styles.cardContent}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => {
            const starValue = i + 1;

            if (testimonial.rating >= starValue) {
              return <Star key={i} className={`${styles.star} ${styles.filledStar}`} />;
            }
            else if (testimonial.rating >= starValue - 0.5) {
              return (
                <div key={i} className={styles.halfStarContainer}>
                  <Star className={`${styles.star} ${styles.emptyStar} ${styles.absoluteStar}`} />
                  <StarHalf className={`${styles.star} ${styles.filledStar} ${styles.absoluteStar}`} />
                </div>
              );
            }
            else {
              return <Star key={i} className={`${styles.star} ${styles.emptyStar}`} />;
            }
          })}
        </div>
        <p className={styles.text}>"{testimonial.text}"</p>
        <div>
          <h4 className={styles.author}>{testimonial.name}</h4>
          <span className={styles.company}>{testimonial.company}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="clientes" className={styles.section}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.container}>

        <div className={styles.headerWrapper}>
          <SectionHeader
            title="Depoimentos"
            subtitle="O que dizem os nossos clientes"
          />
        </div>

        {isMobile ? (
          <Slider {...carouselSettings} className={styles.slider}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className={styles.carouselItem}>
                  {renderTestimonialCard(testimonial)}
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.grid}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                {renderTestimonialCard(testimonial)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default (Depoimentos);