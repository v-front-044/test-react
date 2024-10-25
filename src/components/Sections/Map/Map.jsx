/* eslint-disable react/prop-types */
import styles from './Map.module.scss';

import mapData from '@pathData/Home/_contentData.json';


const Map = () => {
   return (
      <div className={styles.map}>
         <div className={styles.map__container}>
            <div className={styles.googleMap}>
               <iframe
                  src={mapData.googleMapSrc}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
               ></iframe>
            </div>
         </div>
      </div>
   );
};

export default Map;