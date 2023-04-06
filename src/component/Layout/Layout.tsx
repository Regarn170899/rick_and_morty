import React from 'react';
import {footerText} from '../../Constans';
import Header from "../Header/Header";
import styles from"./Layout.module.css"

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
            <footer>
                {footerText}
            </footer>

        </div>
    );
};

export default Layout;