import React from "react";
import UpperDiv from "./upperDiv";
import styles from "./Footer.module.css";
import LowerDiv from "./lowerDiv";

function Footer() {
  return (
    <footer className={styles.footer}>
      <UpperDiv />
      <LowerDiv />
    </footer>
  );
}

export default Footer;
