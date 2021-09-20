import React from "react";
import styles from "./LowerDiv.module.css";

export default function LowerDiv() {
  return (
    <div className={styles.lowerDiv}>
      <div className={styles.container}>
        <div className={styles.categories}>
          <div>
            <h4>Categories</h4>
            <ul>
              <li>Tops</li>
              <li>Hoodies</li>
              <li>Hats</li>
              <li>Shorts</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4>Information</h4>
            <ul>
              <li>Contact</li>
              <li>Store Locator</li>
              <li>Careers</li>
              <li>About Us</li>
              <li>Opening Hours</li>
            </ul>
          </div>
          <div>
            <h4>Need Help?</h4>
            <ul>
              <li>Delivery</li>
              <li>Returns</li>
              <li>FAQ's</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className={styles.policies}>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy of Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>&copy; Logoipsum. All Rights Reserved</span>
        <span>Created by Profiletree</span>
      </div>
    </div>
  );
}
