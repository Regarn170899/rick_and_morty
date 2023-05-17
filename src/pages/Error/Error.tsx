import React from "react";
import styles from "./Error.module.scss";
import pickle from "@assets/img/Error/pickle.svg";
const Error = () => {
  return (
    <div className={styles.errorPageContainer}>
      <h1 className={styles.namePage}>Error 404</h1>
      <div className={styles.descriptionContainer}>
        <p>Don’t worry my friend, not an alien penis... </p>
        <div>
          <img src={pickle} className={styles.pickle} alt="pickle image" />
        </div>
      </div>
    </div>
  );
};

export default Error;
