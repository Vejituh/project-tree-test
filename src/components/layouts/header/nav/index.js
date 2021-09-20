import React from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.upperNav}>
        <figure>
          <img src="logo.svg" />
        </figure>
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className={styles.visuallyHidden}>Search entire store</span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search Search entire store"
            name="s"
            className={styles.searchInput}
          />
          <button className={styles.searchButton} type="submit">
            <img src="search.svg" />
          </button>
        </form>
        <ul className={styles.ul}>
          <li>
            <img src="user.svg" />
          </li>
          <li>
            <img src="heart.svg" />
          </li>
          <li>
            <img src="bag.svg" />
            <span>£0.00</span>
          </li>
        </ul>
      </div>
      <div className={styles.categories}>
        <ul className={styles.ul}>
          <li>
            Tops <i className={styles.arrow}></i>
          </li>
          <li>
            Hoodies <i className={styles.arrow}></i>
          </li>
          <li>
            Hats <i className={styles.arrow}></i>
          </li>
          <li>
            Shorts <i className={styles.arrow}></i>
          </li>
          <li>
            Accessories <i className={styles.arrow}></i>
          </li>
          <li>
            Sales Category <i className={styles.arrow}></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
