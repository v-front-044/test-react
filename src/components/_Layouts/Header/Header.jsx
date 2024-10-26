import styles from './Header.module.scss';
import { useState, useEffect } from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';


const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   useEffect(() => {
      if (isMenuOpen) {
         document.documentElement.classList.add('menu-open');
      } else {
         document.documentElement.classList.remove('menu-open');
      }
   }, [isMenuOpen]);

   return (
      <header className={styles.header}>
         <div className={styles.header__container}>
            <div className={styles.header__body}>
               <Logo />
               <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
         </div>
      </header>
   );
};

export default Header;