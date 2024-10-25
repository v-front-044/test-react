/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Menu.module.scss';

const Menu_1 = ({ isOpen, toggleMenu }) => (
   <div className={styles.menu}>
      <button type="button" className={`${styles.menu__icon} ${styles.icon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
         <span></span>
      </button>
      <nav className={`${styles.menu__body} ${isOpen ? styles.open : ''}`}>
         <ul className={styles.menu__list}>
            <li className={styles.menu__item}><a href="features.html" className={styles.menu__link}>Features</a></li>
            <li className={styles.menu__item}><a href="blog.html" className={styles.menu__link}>Blog</a></li>
            <li className={styles.menu__item}><a href="community.html" className={styles.menu__link}>Community</a></li>
            <li className={styles.menu__item}><a href="about.html" className={styles.menu__link}>About</a></li>
            <li className={styles.menu__item}><a href="assets.html" className={styles.menu__link}>Assets</a></li>
         </ul>
         <a className={styles.menu__button} href="#">❤︎ Donate</a>
      </nav>
   </div>
);

export default Menu_1;