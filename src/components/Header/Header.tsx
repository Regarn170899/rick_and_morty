import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
    return (
        <div className={styles.header} >
            <Logo/>
            <NavMenu/>
        </div>
    );
};

export default Header;