/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './CommunityBlock.module.scss';


const CommunityBlock = ({ imageSrc, name, description, linkHref, linkText }) => {
   return (
      <div className={styles.community__block}>
         <div className={styles.community__image}>
            <img src={imageSrc} alt={name} />
         </div>
         <span className={styles.community__name}>{name}</span>
         <p className={styles.community__descr}>{description}</p>
         <Link className={styles.community__link} to={linkHref}>
            {linkText}
         </Link>
      </div>
   );
};

export default CommunityBlock;