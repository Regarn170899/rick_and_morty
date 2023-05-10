import React from "react";
import styles from "./Logo.module.scss";
import logo from "@assets/img/loader/Rick_and_Morty.svg";

const Logo = () => {
  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
