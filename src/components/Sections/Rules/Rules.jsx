/* eslint-disable react/prop-types */
import styles from './Rules.module.scss';

import TitleBlock from '../../TitleBlock/TitleBlock';
import RulesContent from './RulesContent';


const Rules = ({ pageTitle, sections }) => {
   return (
      <section className={styles.rules}>
         <TitleBlock title={pageTitle} />
      
         <div className={`${styles.rules__container} ${styles.content}`}>
            <div className={styles.rules__body}>
               {sections.map((section, index) => (
                  <RulesContent
                     key={index}
                     subTitle={section.subTitle}
                     content={section.content}
                     list={section.list}
                     additionalContent={section.additionalContent}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Rules;