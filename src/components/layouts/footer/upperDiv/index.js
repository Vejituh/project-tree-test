import React from "react";
import styles from "./UpperDiv.module.css";

export default function UpperDiv() {
  return (
    <div className={styles.upperDiv}>
      <div className={styles.newsletter}>
        <h4>Newsletter</h4>
        <p>Join the community for exclusive offers, updates and more</p>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <a href="#">Submit</a>
        </div>
      </div>
      <div className={styles.contact}>
        <div>
          <h4>Get in touch</h4>
          <p>For more information about our products, please get in touch</p>
        </div>
        <div>
          <span>{/* <img src="" /> */}</span>
          <a href="mailto:info@logoipsium.com">info@logoipsium.com</a>
        </div>
      </div>
      <div className={styles.social}>
        <div>
          <h4>Follow Us</h4>
          <div className={styles.socialIcon}>
            <img src="facebook.svg" />
            <img src="twitter.svg" />
            <img src="instagram.svg" />
          </div>
        </div>
        <div className={styles.services}>
          <img src="paypal.svg" />
          <img src="visa.svg" />
          <img src="mastercard.svg" />
        </div>
      </div>
    </div>
  );
}
