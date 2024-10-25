/* eslint-disable react/prop-types */
import styles from './Main.module.scss';

import mainData from '@pathData/Home/_contentData.json';


const Main = ({ href }) => {

   return (
      <section className={styles.main}>
         <div className={styles.main__container}>
            <div className={styles.main__body}>
               <h1 className={styles.main__title} dangerouslySetInnerHTML={{ __html: mainData.main.title }}></h1>
               <p className={styles.main__text}>
                  {mainData.main.text}
               </p>
               <a className={styles.main__link} href={href}>
                  {mainData.main.linkText}
               </a>
            </div>
         </div>
      </section>
   );
};

export default Main;