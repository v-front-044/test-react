/* eslint-disable react/prop-types */
import styles from './News.module.scss';

import NewsArticle from '../../NewsArticle/NewsArticle';
import newsData from '@pathData/Home/_contentData.json';

import newsImg1 from '@img/news/news-1.webp';
import newsImg2 from '@img/news/news-2.webp';
import newsImg3 from '@img/news/news-3.webp';
import newsImg4 from '@img/news/news-4.webp';


const News = ({ href }) => {

   return (
      <section className={styles.news}>
         <div className={styles.news__container}>
            <h2 className={styles.news__title}>{newsData.news.title}</h2>
            <div className={styles.news__body}>
               <div className={styles.news__left}>
                  <NewsArticle
                     isBig={true}
                     imageSrc={newsImg1}
                     subTitle={newsData.news.articles[0].subTitle}
                     description={newsData.news.articles[0].description}
                     date={newsData.news.articles[0].date}
                  />
               </div>
               <div className={styles.news__right}>
                  <NewsArticle
                     imageSrc={newsImg2}
                     subTitle={newsData.news.articles[1].subTitle}
                     description={newsData.news.articles[1].description}
                     date={newsData.news.articles[1].date}
                  />
                  <NewsArticle
                     imageSrc={newsImg3}
                     subTitle={newsData.news.articles[2].subTitle}
                     description={newsData.news.articles[2].description}
                     date={newsData.news.articles[2].date}
                  />
                  <NewsArticle
                     imageSrc={newsImg4}
                     subTitle={newsData.news.articles[3].subTitle}
                     description={newsData.news.articles[3].description}
                     date={newsData.news.articles[3].date}
                  />
               </div>
            </div>
            <a className={styles.news__link} href={href}>{newsData.news.linkText}</a>
         </div>
      </section>
   );
};

export default News;