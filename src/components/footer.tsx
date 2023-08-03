import * as React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          <span>React + TS Todo</span>
        </p>
        @2023
      </footer>
    </>
  );
};

export default Footer;
