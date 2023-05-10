import React from "react";
import styles from "./Footer.module.scss";
import NavMenu from "../NavMenu/NavMenu";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoAndNavMenuContainer}>
        <div className={styles.logoFooter} />
      </div>
      <div className={styles.contactContainer}>
        <a
          href={"https://github.com/Regarn170899"}
          className={styles.contactDescription}
        >
          GitHub
        </a>
        <div className={styles.gitLogo}></div>
      </div>
    </div>
  );
};

export default Footer;
