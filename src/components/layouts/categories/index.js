import React from "react";
import styles from "./Categories.module.css";

export default function Categories({ data: products }) {
  const popularCategories = [];
  products.map((product) => {
    if (
      product.slug === "beanie-with-logo" ||
      product.slug === "hoodie-with-zipper" ||
      product.slug === "long-sleeve-tee" ||
      product.slug === "logo-collection" ||
      product.slug === "belt"
    ) {
      popularCategories.push(product);
    }
  });

  function checkCategory(item) {
    return item.slug === "beanie-with-logo"
      ? "Hats"
      : item.slug === "hoodie-with-zipper"
      ? "Hoodies"
      : item.slug === "long-sleeve-tee"
      ? "Tops"
      : item.slug === "logo-collection"
      ? "Logo collections"
      : item.slug === "belt"
      ? "Accessories"
      : "";
  }

  return (
    <div className={styles.container}>
      <h1>Popular Categories</h1>
      <div className={styles.childContainer}>
        {popularCategories.map((category) => {
          return (
            <div id={category.name} key={category.id}>
              <figure>
                <a href="#">
                  <img src={category.images[0].src} />
                </a>
              </figure>
              <p>{checkCategory(category)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
