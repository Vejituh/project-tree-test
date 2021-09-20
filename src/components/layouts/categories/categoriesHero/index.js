import React from "react";
import styles from "./CategoriesHero.module.css";

function CategoriesMain({ data: products }) {
  const featured = products.filter((product) => product.featured);
  const filteredCategories = [];

  featured.map((item) => {
    if (
      item.name == "Hoodie with Pocket" ||
      item.name == "Cap" ||
      item.name == "Sunglasses"
    ) {
      let i = filteredCategories.findIndex((x) => x.name == item.name);
      if (i <= -1) {
        filteredCategories.push(item);
      }
    }
    return null;
  });

  return (
    <section className={styles.container}>
      <div className={styles.featuredCat}>
        {filteredCategories.map((categorie) => {
          if (categorie.categories[0].name === "Hoodies") {
            return (
              <React.Fragment key={"Hoodie"}>
                <figure>
                  <img src={categorie.images[0].src}></img>
                </figure>
                <div>
                  <h4>{categorie.categories[0].name}</h4>
                  <p>View our full range of hoodies</p>
                  <a href="#">Shop Now</a>
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className={styles.halfDivContainer}>
        {filteredCategories.map((categorie) => {
          if (categorie.categories[0].name !== "Hoodies") {
            return (
              <div key={categorie.name}>
                <figure>
                  <img src={categorie.images[0].src}></img>
                </figure>
                <div className="categoriesDesc">
                  <h4>{categorie.categories[0].name}</h4>
                  <p>
                    View our full range of{" "}
                    {categorie.name === "Sunglasses" ? "accessories" : "hates"}
                  </p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default CategoriesMain;
