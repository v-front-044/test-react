import styles from './ContactForm.module.scss';
import { useEffect, useState } from 'react';

import PopupMessage from './PopupMessage';
import contactData from '@pathData/Contact/_contactData.json';


const ContactForm = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [popupSelector, setPopupSelector] = useState(null);

   // Відкриття попапу
   const openPopup = (selector) => {
      const popupElement = document.querySelector(selector);
      if (popupElement) {
         popupElement.classList.add(styles.popup_show);
         document.documentElement.classList.add('popup-show');
         setIsOpen(true);
         setPopupSelector(selector);
      } else {
         console.log(`Попап з селектором ${selector} не знайдено.`);
      }
   };

   // Закриття попапу
   const closePopup = () => {
      const popupElement = document.querySelector(popupSelector);
      if (popupElement) {
         popupElement.classList.remove(styles.popup_show);
         document.documentElement.classList.remove('popup-show');
         setIsOpen(false);
         setPopupSelector(null);
      }
   };

   // Валідація форми
   const validateForm = (form) => {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[data-required]');

      requiredFields.forEach((field) => {
         if (!field.value.trim()) {
            field.classList.add(styles._formError);
            isValid = false;
         } else {
            field.classList.remove(styles._formError);
         }
      });

      return isValid;
   };

   // Подача форми
   const handleFormSubmit = (e) => {
      const form = e.target.closest('form[data-popup-message]');
      if (form) {
         e.preventDefault();
         const isValid = validateForm(form);
         if (isValid) {
            const selector = form.getAttribute('data-popup-message');
            if (form.hasAttribute('data-dev')) {
               formSent(form);
               if (selector) openPopup(selector);
            }
         } else {
            console.log('Error');
         }
      }
   };

   // Обробка події відправки форми
   const formSent = (form) => {
      form.reset();
   };

   // Додавання слухачів подій при монтуванні компонента
   useEffect(() => {
      // Обробка кліків для відкриття та закриття попапів
      const handleDocumentClick = (e) => {
         const buttonOpen = e.target.closest('[data-popup-message]');
         if (buttonOpen && document.body.hasAttribute('data-dev')) {
            e.preventDefault();
            const selector = buttonOpen.getAttribute('data-popup-message');
            if (selector) openPopup(selector);
         }
         const buttonClose = e.target.closest('[data-close]');
         if (buttonClose || (!e.target.closest(`.${styles.popup__content}`) && isOpen)) {
            e.preventDefault();
            closePopup();
         }
      };

      // Закриття попапу на Escape
      const handleDocumentKeyDown = (e) => {
         if (e.key === 'Escape' && isOpen) {
            e.preventDefault();
            closePopup();
         }
      };

      document.addEventListener('click', handleDocumentClick);
      document.addEventListener('keydown', handleDocumentKeyDown);
      document.addEventListener('submit', handleFormSubmit);

      // Видалення слухачів при розмонтуванні компонента
      return () => {
         document.removeEventListener('click', handleDocumentClick);
         document.removeEventListener('keydown', handleDocumentKeyDown);
         document.removeEventListener('submit', handleFormSubmit);
      };
   }, [isOpen, popupSelector]);

   return (
      <section className={styles.discuss}>
         <div className={styles.discuss__container}>
            <h2 className={styles.discuss__title}>{contactData.title}</h2>
            <p className={styles.discuss__text}>{contactData.text}</p>
            <div className={styles.discuss__body}>
               <form className={styles.connection} action="#" method="POST" data-dev data-popup-message="#popup-form">
                  <div className={styles.connection__wrap}>
                     <label htmlFor="name">{contactData.form.nameLabel}</label>
                     <input
                        type="text"
                        name="form[name]"
                        id="name"
                        data-error="Complete the field"
                        placeholder={contactData.form.namePlaceholder}
                        className={styles.input}
                        data-required
                     />
                  </div>
                  <div className={styles.connection__wrap}>
                     <label htmlFor="phone">{contactData.form.phoneLabel}</label>
                     <input
                        type="tel"
                        name="form[tel]"
                        id="phone"
                        data-error="Complete the field"
                        placeholder={contactData.form.phonePlaceholder}
                        className={styles.input}
                        data-required
                     />
                  </div>
                  <button type="submit" className={styles.button}>
                     {contactData.form.submitButton}
                  </button>
               </form>
            </div>
         </div>
         <PopupMessage message={contactData.popupMessage} />
      </section>
   );
};

export default ContactForm;