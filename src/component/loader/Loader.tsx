import React from 'react';
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <div className={styles.spaceship}></div>
        </div>
    );
};

export default Loader;