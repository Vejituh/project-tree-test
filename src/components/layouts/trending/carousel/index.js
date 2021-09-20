import React, { useState, useEffect } from "react";
import CarouselCard from "../carouselCard";
import styles from "./Carousel.module.css";

function Carousel({ products }) {
  const [slideActive, setSlideActive] = useState(0);
  const [current, setCurrent] = useState(3);
  const [carouselLength, setCarouselLength] = useState(
    Math.round(products.length / 4)
  );

  function goToNewSlide(e) {
    e.preventDefault();
    const arr = Array.from(e.target.parentElement.children);
    arr.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    const slideNum = e.target.getAttribute("id");

    let index = 0;
    let slidesLength = products.length - 1;
    index = Math.round(slidesLength / 4) * slideNum;

    setCurrent(index);
    setSlideActive(slideNum);
  }

  const items = products.map((product, index) => {
    return (
      <div
        className={
          index === current ||
          index === current + 1 ||
          index === current + 2 ||
          index === current + 3
            ? styles.carousel__slideActive
            : styles.carousel__slide
        }
        key={index}
      >
        <CarouselCard product={product} />
      </div>
    );
  });

  return (
    <>
      <div className={styles.carouselContainer}>{items}</div>
      <div className={styles.sliderContainer}>
        {[...Array(carouselLength)].map((arr, index) => (
          <a
            key={index}
            id={index}
            className={index === 0 ? "active" : null}
            href="#"
            onClick={(e) => goToNewSlide(e)}
          ></a>
        ))}
      </div>
    </>
  );
}

export default Carousel;
