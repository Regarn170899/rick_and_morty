import React from "react";
import styles from "./About.module.scss";
import aboutLogo from "@assets/img/About/AboutLogo.svg";
const About = () => {
  return (
    <div>
      <div>
        <img src={aboutLogo} alt="Logo About page" />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.textAbout}>
          You're talking about Inception? Wubba lubba dub dub! This isn't Game
          of Thrones, Morty. Awwww thankss your preferences better that way.
          Plus, if you get in kind of a cool enough relationship, you can sort
          of follow each bies for 25 schmeckles!
        </p>
        <p className={styles.email}>1526497@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
