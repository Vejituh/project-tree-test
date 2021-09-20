import React from "react";
import styles from "./CarouselCard.module.css";

export default function CarouselCard({ product }) {
  const image = product.images[0].src;
  const regularPrice = product.regular_price;
  const price = product.price;
  return (
    <>
      <figure className={styles.figure}>
        <img src={image} />
      </figure>
      <p className={styles.carouselSlide__name}>{product.name}</p>
      <span>
        £
        {parseInt(price) &&
        parseInt(regularPrice) &&
        parseInt(price) !== parseInt(regularPrice) ? (
          <div className={styles.carouselPrice}>
            <span>{price.toFixed(2)}</span>
            <span>£{regularPrice.toFixed(2)}</span>
          </div>
        ) : (
          <span>{price.toFixed(2)}</span>
        )}
      </span>
      <ul className={styles.trendingButtons}>
        <a href="#">
          <li>View Item</li>
        </a>

        <a href="#">
          <li>Add to Cart</li>
        </a>
      </ul>
    </>
  );
}
