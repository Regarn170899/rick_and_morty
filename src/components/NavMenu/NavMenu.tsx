import React, {ReactElement} from 'react';
import {arrMenu} from "@constants/index";
import {Link} from "react-router-dom";
import styles from './NavMenu.module.scss'

const NavMenu = () => {
    return (
        <div className={styles.navContainer}>
            {arrMenu.map((itemMenu) :ReactElement =>{
                return (<Link key={itemMenu.id} className={styles.navItem} to ={itemMenu.path}>{itemMenu.name}</Link>)
            })
            }
        </div>
    );
};

export default NavMenu;