import styles from './Partners.module.scss';

import PartnerBlock from '../../PartnerBlock/PartnerBlock';
import partnersData from '@pathData/Home/_contentData.json';

// Імпортуємо зображення
import patronLogo1 from '@img/partners/patron/logo-1.png';
import patronLogo2 from '@img/partners/patron/logo-2.png';
import patronLogo3 from '@img/partners/patron/logo-3.png';

import platinumLogo1 from '@img/partners/platinum/logo-1.png';
import platinumLogo2 from '@img/partners/platinum/logo-2.png';
import platinumLogo3 from '@img/partners/platinum/logo-3.png';
import platinumLogo4 from '@img/partners/platinum/logo-4.png';

import goldLogo1 from '@img/partners/gold/logo-1.png';
import goldLogo2 from '@img/partners/gold/logo-2.png';
import goldLogo3 from '@img/partners/gold/logo-3.png';
import goldLogo4 from '@img/partners/gold/logo-4.png';

import silverLogo1 from '@img/partners/silver/logo-1.png';
import silverLogo2 from '@img/partners/silver/logo-2.png';
import silverLogo3 from '@img/partners/silver/logo-3.png';
import silverLogo4 from '@img/partners/silver/logo-4.png';
import silverLogo5 from '@img/partners/silver/logo-5.png';
import silverLogo6 from '@img/partners/silver/logo-6.png';
import silverLogo7 from '@img/partners/silver/logo-7.png';
import silverLogo8 from '@img/partners/silver/logo-8.png';


// Масиви зображень і класи для кожної категорії
const partnerImage = [
   {
      class: styles.partners__patron,
      images: [patronLogo1, patronLogo2, patronLogo3]
   },
   {
      class: styles.partners__platinum,
      images: [platinumLogo1, platinumLogo2, platinumLogo3, platinumLogo4]
   },
   {
      class: styles.partners__gold,
      images: [goldLogo1, goldLogo2, goldLogo3, goldLogo4]
   },
   {
      class: styles.partners__silver,
      images: [
         silverLogo1,
         silverLogo2,
         silverLogo3,
         silverLogo4,
         silverLogo5,
         silverLogo6,
         silverLogo7,
         silverLogo8
      ]
   }
];


const Partners = () => {
   return (
      <section className={styles.partners}>
         <div className={styles.partners__container}>
            <h2 className={styles.partners__title}>{partnersData.partnersContent.title}</h2>
            <div className={styles.partners__body}>
               {partnerImage.map((partner, index) => (
                  <PartnerBlock
                     key={index}
                     position={partnersData.partners[index].position}
                     blockClass={partner.class} // Використовуємо клас для стилізації
                     images={partner.images} // Підставляємо відповідні зображення
                  />
               ))}
            </div>
            <p className={styles.partners__text}>
               {partnersData.partnersContent.text}{' '}
               <a href={`mailto:${partnersData.partnersContent.email}`}>
                  {partnersData.partnersContent.email}
               </a>.
            </p>
         </div>
      </section>
   );
};

export default Partners;