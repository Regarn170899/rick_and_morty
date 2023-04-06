import React, {ReactElement} from 'react';
import {arrMenu} from "../../Constans";
import {Link} from "react-router-dom";
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={styles.navContainer}>
            {arrMenu.map((itemMenu) :ReactElement =>{
                return (<Link className={styles.navItem} to ='/'>{itemMenu}</Link>)
            })
            }
        </div>
    );
};

export default NavMenu;