import React from 'react';
import styles from './Loader.module.css'
import Header from "../Header/Header";
const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spaceship}></div>
        </div>
    );
};

export default Loader;