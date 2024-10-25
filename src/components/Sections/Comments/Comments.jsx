/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styles from './Comments.module.scss';

import CommentArticle from '../../CommentArticle/CommentArticle';
import commentsData from '@pathData/Home/_contentData.json';

import img1 from '@img/comments/comments-1.webp';
import img2 from '@img/comments/comments-2.webp';
import img3 from '@img/comments/comments-3.webp';
import img4 from '@img/comments/comments-4.webp';
import img5 from '@img/comments/comments-5.webp';
import img6 from '@img/comments/comments-6.webp';


const images = [img1, img2, img3, img4, img5, img6];

const Comments = ({ href }) => {

   return (
      <section className={styles.comments}>
         <div className={styles.comments__container}>
            <h2 className={styles.comments__title}>{commentsData.comments.title}</h2>
            <div className={styles.comments__body}>
               {commentsData.comments.articles.map((article, index) => (
                  <CommentArticle
                     key={index}
                     imageSrc={images[index]}
                     subTitle={article.subTitle}
                     description={article.description}
                  />
               ))}
            </div>
            <a className={styles.comments__link} href={href}>
               {commentsData.comments.linkText}
            </a>
         </div>
      </section>
   );
};

export default Comments;