/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './NewsArticle.module.scss';


const NewsArticle = ({ isBig = false, imageSrc, subTitle, description, date }) => {
   return (
      <article className={`${styles.news__wrap} ${isBig ? styles.big : ''}`}>
         <div className={styles.news__image}>
            <img src={imageSrc} alt="News" />
         </div>
         <div className={styles.news__info}>
            <h2 className={styles.news__subTitle}>{subTitle}</h2>
            <p className={styles.news__descr}>{description}</p>
            <span className={styles.news__date}>{date}</span>
         </div>
      </article>
   );
};

export default NewsArticle;
