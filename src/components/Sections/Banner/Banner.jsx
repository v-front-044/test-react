/* eslint-disable react/prop-types */
import styles from './Banner.module.scss';

import bannerData from '@pathData/Home/_contentData.json';

import bannerImage from '@img/godot-foundation.png';


const Banner = ({ href }) => {
   return (
      <section className={styles.banner}>
         <div className={styles.banner__container}>
            <div className={styles.banner__body}>
               <div className={styles.banner__image}>
                  <img src={bannerImage} alt="Banner image" />
               </div>
               <p className={styles.banner__text}>
                  {bannerData.banner.text}
               </p>
               <a className={styles.banner__link} href={href}>
                  {bannerData.banner.linkText}
               </a>
            </div>
         </div>
      </section>
   );
};

export default Banner;