import React from "react";
import styles from "../css/Footer.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <p className={styles.footerText}>
          The wesbite is a univeristy project and not intended for actual use. Copyright © 2020.
      </p>
    </footer>
  );
};

export default Footer;
