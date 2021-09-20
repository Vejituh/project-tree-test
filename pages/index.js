import Header from "../src/components/layouts/header";
import Footer from "../src/components/layouts/footer";
import styles from "../styles/Home.module.css";
import axios from "axios";
import WooApi from "../constants/api";
import Trending from "../src/components/layouts/trending";
import CategoriesMain from "../src/components/layouts/categories/categoriesHero";
import Categories from "../src/components/layouts/categories";
import Product from "../src/components/layouts/product";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Header data={products} />
      <Trending data={products} />
      <CategoriesMain data={products} />
      <Categories data={products} />
      <Product data={products} />
      <Footer />
    </div>
  );
}

Home.getInitialProps = async () => {
  const products = await axios.get(
    `${WooApi.url.wc}products?per_page=100&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`
  );
  return {
    products: products.data,
  };
};
