import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ data: products }) {
  const splashImage = products.find(({ name }) => name === "Logo Collection");
  return (
    <section className={styles.section}>
      <div className={styles.splash}>
        <div>
          <h1>Shop all Products</h1>
          <p>View our full range of products, including our latest clothing.</p>
          <button>Shop Now</button>
        </div>
        <figure>
          <img src={splashImage.images[0].src}></img>
        </figure>
      </div>
      <ul className={styles.ul}>
        <li>
          <img src="truck.svg"></img>
          <p>
            <strong>Free Standard Delivery </strong> to UK & Ireland over £/€20
          </p>
        </li>
        <li className={styles.liBorder}>
          <img src="percentage.svg"></img>
          <p>10% Discount at Checkout</p>
        </li>
        <li>
          <img src="truck.svg"></img>
          <p>
            <strong>Free priority delivery </strong> on orders over £/€50
          </p>
        </li>
      </ul>
    </section>
  );
}
