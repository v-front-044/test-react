/* eslint-disable react/prop-types */
import styles from './PartnerBlock.module.scss';


const PartnerBlock = ({ position, blockClass, images }) => {
   return (
      <div className={styles.partners__block}>
         <span className={styles.partners__position}>{position}</span>
         <div className={blockClass}>
            {images.map((imageSrc, index) => (
               <div key={index} className={styles.partners__image}>
                  <img src={imageSrc} alt="Logo brand" />
               </div>
            ))}
         </div>
      </div>
   );
};

export default PartnerBlock;