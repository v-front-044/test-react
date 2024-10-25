/* eslint-disable react/prop-types */
import styles from './ContactForm.module.scss';


const PopupMessage = ({ message }) => {
   return (
      <div id="popup-form" aria-hidden="true" className={styles.popup}>
         <div className={styles.popup__wrapper}>
            <div className={styles.popup__content}>
               <button data-close type="button" className={styles.popup__close}>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path opacity="0.850056" d="M1.73333 1.48883L21.5469 21.0288" stroke="#000" strokeLinecap="square" />
                     <path opacity="0.850056" d="M21.2667 1.48883L1.45309 21.0288" stroke="#000" strokeLinecap="square" />
                  </svg>
               </button>
               <div className={styles.popup__text}>
                  {message}
               </div>
            </div>
         </div>
      </div>
   );
};

export default PopupMessage;