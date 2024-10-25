/* eslint-disable react/prop-types */
import styles from './TitleBlock.module.scss';


const TitleBlock = ({ title }) => {
   return (
      <div className={styles.titleBlock}>
         <div className={styles.titleBlock__container}>
            <h1 className={styles.titleBlock__title}>{title}</h1>
         </div>
      </div>
   );
};

export default TitleBlock;
