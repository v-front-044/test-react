/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';


// Масив об'єктів для навігаційних посилань
const menuLinks = [
   { path: '/privacy-policy', label: 'Privacy Policy' },
   { path: '/terms-conditions', label: 'Terms Condition' },
   { path: '/contact', label: 'Contact' }
];

const Menu_1 = ({ isOpen, toggleMenu }) => (
   <div className={styles.menu}>
      <button type="button" className={`${styles.menu__icon} ${styles.icon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
         <span></span>
      </button>
      <nav className={`${styles.menu__body} ${isOpen ? styles.open : ''}`}>
         <ul className={styles.menu__list}>
            {menuLinks.map((link, index) => (
               <li key={index} className={styles.menu__item}>
                  <Link to={link.path} className={styles.menu__link}>
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
         <a className={styles.menu__button} href="#">❤︎ Download</a>
      </nav>
   </div>
);

export default Menu_1;