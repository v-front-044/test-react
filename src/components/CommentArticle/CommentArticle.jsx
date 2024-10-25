/* eslint-disable react/prop-types */
import styles from './CommentArticle.module.scss';


const CommentArticle = ({ imageSrc, subTitle, description }) => {
   return (
      <article className={styles.comments__article}>
         <div className={styles.comments__image}>
            <img src={imageSrc} alt="Image background" />
         </div>
         <div className={styles.comments__info}>
            <h2 className={styles.comments__subTitle}>{subTitle}</h2>
            <p className={styles.comments__descr}>{description}</p>
         </div>
      </article>
   );
};

export default CommentArticle;