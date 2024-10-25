/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Logo.module.scss';
import logoImage from '../../../assets/img/logo.png';


const Logo = () => (
   <a className={styles.logo} href="/../">
      <img src={logoImage} alt="Logo" />
   </a>
);

export default Logo;
