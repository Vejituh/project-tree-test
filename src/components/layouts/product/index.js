import React, { useState } from "react";
import styles from "./Product.module.css";
import StarRating from "./starRating";
import parse from "html-react-parser";
import Colour from "./colour";

export default function Product({ data: products }) {
  const defaultItem = products.filter(
    (product) => product.name == "V-Neck T-Shirt"
  );
  let mainImage = defaultItem[0].images[0].src;
  const imagesUrl = [
    ...defaultItem[0].images.slice(1, defaultItem[0].images.length),
  ];
  const stockStatus =
    defaultItem[0].stock_status === "instock" ? "In Stock" : "Out of Stock";
  const sizeOptions = [defaultItem[0].attributes[1].options];
  const [currentSize, setCurrentSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    setCurrentSize(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentSize);
  }

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.altColours}>
          {imagesUrl.map((url) => {
            return (
              <figure key={url.id}>
                <img src={url.src} />
              </figure>
            );
          })}
        </div>
        <div className={styles.mainImage}>
          <figure>
            <img src={mainImage} />
          </figure>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>{defaultItem[0].name}</span>
          <span className={styles.stock}>{stockStatus}</span>
        </div>
        <div className={styles.reviews}>
          <StarRating rating={defaultItem[0].average_rating} />
          <span>{defaultItem[0].rating_count} Reviews</span>
        </div>
        <div className={styles.description}>
          {parse(defaultItem[0].description)}
        </div>
        <div className={styles.price}>{parse(defaultItem[0].price_html)}</div>
        <Colour props={defaultItem} />
        <div className={styles.sizeContainer}>
          <div className={styles.sizeHeader}>
            <span>Select Size:</span>
            <span>Size Guide</span>
          </div>
          <form onSubmit={handleSubmit}>
            <select
              className={styles.select}
              onChange={handleChange}
              value={currentSize}
            >
              {sizeOptions[0].reverse().map((size) => {
                return (
                  <option key={size} value={size}>
                    {size}
                  </option>
                );
              })}
            </select>

            <div className={styles.quantityContainer}>
              <span>Quantity</span>
              <div>
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                <input
                  type="number"
                  mobile
                  value={quantity}
                  onChange={handleQuantity}
                ></input>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                <a href="#" className={styles.submit}>
                  Add to Cart
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
