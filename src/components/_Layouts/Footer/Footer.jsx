import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

import socialIcon1 from '@img/icon/social-1.png';
import socialIcon2 from '@img/icon/social-2.png';
import socialIcon3 from '@img/icon/social-3.png';
import socialIcon4 from '@img/icon/social-4.png';


const Footer = () => {
   const linksData = [
      {
         title: 'Godot Engine',
         internal: true, // Усі посилання в цьому блоці є внутрішніми
         links: [
            { name: 'Contact', href: '/contact' }
         ]
      },
      {
         title: 'Contact',
         internal: false, // Усі посилання в цьому блоці є зовнішніми
         links: [
            { name: 'Grev Turegatan 36, 114 38 Stockholm, Sweden', href: 'https://maps.app.goo.gl/cvwFcwRxYdLgndbj8' },
            { name: '+3293298208', href: 'tel:+3293298208' },
            { name: 'contact@godot.foundation', href: 'mailto:contact@godot.foundation' }
         ]
      },
      {
         title: 'Privacy & Terms',
         internal: true, // Усі посилання в цьому блоці є внутрішніми
         links: [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms Condition', href: '/terms-conditions' }
         ]
      }
   ];

   const socialLinks = [
      { src: socialIcon1, alt: 'Social Icon', href: '#' },
      { src: socialIcon2, alt: 'Social Icon', href: '#' },
      { src: socialIcon3, alt: 'Social Icon', href: '#' },
      { src: socialIcon4, alt: 'Social Icon', href: '#' }
   ];

   const copyrightText =
      '© 2007-2024 Juan Linietsky, Ariel Manzur and contributors. Hosted by the Godot Foundation. Website source code on GitHub.';

   return (
      <footer className={styles.footer}>
         <div className={styles.footer__container}>
            <div className={styles.footer__body}>
               <div className={styles.footer__top}>
                  {linksData.map((block, index) => (
                     <div key={index} className={styles.footer__block}>
                        <span className={styles.footer__title}>{block.title}</span>
                        <ul className={styles.footer__list}>
                           {block.links.map((link, idx) => (
                              <li key={idx} className={styles.footer__item}>
                                 {block.internal ? (
                                    <Link className={styles.footer__link} to={link.href}>
                                       {link.name}
                                    </Link>
                                 ) : (
                                    <a className={styles.footer__link} href={link.href}>
                                       {link.name}
                                    </a>
                                 )}
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}

                  <div className={styles.footer__block}>
                     <span className={styles.footer__title}>Social</span>
                     <ul className={`${styles.footer__list} ${styles.social}`}>
                        {socialLinks.map((social, index) => (
                           <li key={index} className={styles.footer__item}>
                              <a className={styles.footer__social} href={social.href}>
                                 <img src={social.src} alt={social.alt} />
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className={styles.footer__bottom}>
                  <p className={styles.footer__copyright}>{copyrightText}</p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;