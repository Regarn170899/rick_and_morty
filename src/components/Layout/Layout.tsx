import React from "react";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import styles from "./Layout.module.scss";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <div className={styles.childrenContainer}>{children}</div>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
