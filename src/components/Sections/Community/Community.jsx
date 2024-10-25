import styles from './Community.module.scss';

import CommunityBlock from '../../CommunityBlock/CommunityBlock';
import communityData from '@pathData/Home/_contentData.json';

import img1 from '@img/community/code.png';
import img2 from '@img/community/document.png';
import img3 from '@img/community/report.png';


const images = [img1, img2, img3];

const Community = () => {

   return (
      <section className={styles.community}>
         <div className={styles.community__container}>
            <h2 className={styles.community__title}>{communityData.community.title}</h2>
            <p className={styles.community__text}>{communityData.community.text}</p>
            <div className={styles.community__body}>
               {communityData.community.blocks.map((block, index) => (
                  <CommunityBlock
                     key={index}
                     imageSrc={images[index]}
                     name={block.name}
                     description={block.description}
                     linkHref={block.linkHref}
                     linkText={block.linkText}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Community;