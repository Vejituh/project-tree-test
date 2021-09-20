import React from "react";
import Head from "next/head";
import Nav from "./nav";
import Hero from "./hero";
import styles from "./Header.module.css";

function Header({ data }) {
  return (
    <>
      <Head>
        <title>Project Tree</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Project Tree test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <p>Descriptive sales placeholder message</p>
        <ul className={styles.ul}>
          <li>Careers</li>
          <li>About Us</li>
          <li>Opening Hours</li>
          <li>Store Locator</li>
        </ul>
      </div>
      <Nav />
      <Hero data={data} />
    </>
  );
}

export default Header;
