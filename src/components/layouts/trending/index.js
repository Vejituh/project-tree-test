import React, { useState } from "react";
import Carousel from "./carousel";
import styles from "./Trending.module.css";

function Trending({ data: products }) {
  const sorted = products.sort((a, b) => {
    a = a.name;
    b = b.name;
    if (a < b) {
      return -1;
    }
    if (b < a) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={styles.header}>
      <h1>Trending Products</h1>
      <div>
        <Carousel products={sorted} />
      </div>
    </div>
  );
}

export default Trending;
