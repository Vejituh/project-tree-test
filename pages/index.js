import Header from "../src/components/layouts/header";
import Footer from "../src/components/layouts/footer";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Trending from "../src/components/layouts/trending";
import CategoriesMain from "../src/components/layouts/categories/categoriesHero";
import Categories from "../src/components/layouts/categories";
import Product from "../src/components/layouts/product";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header data={data.products} />
      <Trending data={data.products} />
      <CategoriesMain data={data.products} />
      <Categories data={data.products} />
      <Product data={data.products} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:3000/api/get-products");

  return {
    props: {
      data: data || {},
    },
    revalidate: 60,
  };
}
