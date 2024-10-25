/* eslint-disable react/prop-types */
import styles from './Rules.module.scss';


const RulesContent = ({ subTitle, content, list, additionalContent }) => {
   return (
      <div className={styles.rules__block}>
         <h2 className={styles.rules__subTitle}>{subTitle}</h2>
         {content.map((item, index) => (
            <p key={index} className={styles.rules__text}>{item}</p>
         ))}
         {list && (
            <ul className={styles.rules__list}>
               {list.map((item, index) => (
                  <li key={index} className={styles.rules__item}>{item}</li>
               ))}
            </ul>
         )}
         {additionalContent && additionalContent.map((item, index) => (
            <p key={index} className={styles.rules__text}>{item}</p>
         ))}
      </div>
   );
};

export default RulesContent;
