import React from 'react';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import styles from "./Layout.module.scss"

type Props = {
    children: JSX.Element,
};
const Layout = ({children}:Props) => {
    return (
        <div>
            <header className={styles.headerContainer}>
                <Header/>
            </header>
            {children}
            <footer className={styles.footerContainer}>
                <Footer/>
            </footer>

        </div>
    );
};

export default Layout;