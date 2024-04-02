/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
import './Spollers.scss';


export function spollers() {
   const spollersArray = document.querySelectorAll('[data-spollers]');
   if (spollersArray.length > 0) {
      // Подія кліку
      document.addEventListener("click", setSpollerAction);
      // Отримання звичайних слойлерів
      const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
         return !item.dataset.spollers.split(",")[0];
      });
      // Ініціалізація звичайних слойлерів
      if (spollersRegular.length) {
         initSpollers(spollersRegular);
      }
      // Отримання слойлерів з медіа-запитами
      let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
      if (mdQueriesArray && mdQueriesArray.length) {
         mdQueriesArray.forEach(mdQueriesItem => {
            // Подія
            mdQueriesItem.matchMedia.addEventListener("change", function () {
               initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
         });
      }
      // Ініціалізація
      function initSpollers(spollersArray, matchMedia = false) {
         spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
               spollersBlock.classList.add('_spoller-init');
               initSpollerBody(spollersBlock);
            } else {
               spollersBlock.classList.remove('_spoller-init');
               initSpollerBody(spollersBlock, false);
            }
         });
      }
      // Робота з контентом
      function initSpollerBody(spollersBlock, hideSpollerBody = true) {
         let spollerItems = spollersBlock.querySelectorAll('details');
         if (spollerItems.length) {
            //spollerItems = Array.from(spollerItems).filter(item => item.closest('[data-spollers]') === spollersBlock);
            spollerItems.forEach(spollerItem => {
               let spollerTitle = spollerItem.querySelector('summary');
               if (hideSpollerBody) {
                  spollerTitle.removeAttribute('tabindex');
                  if (!spollerItem.hasAttribute('data-open')) {
                     spollerItem.open = false;
                     spollerTitle.nextElementSibling.hidden = true;
                  } else {
                     spollerTitle.classList.add('_spoller-active');
                     spollerItem.open = true;
                  }
               } else {
                  spollerTitle.setAttribute('tabindex', '-1');
                  spollerTitle.classList.remove('_spoller-active');
                  spollerItem.open = true;
                  spollerTitle.nextElementSibling.hidden = false;
               }
            });
         }
      }
      function setSpollerAction(e) {
         const el = e.target;
         if (el.closest('summary') && el.closest('[data-spollers]')) {
            e.preventDefault();
            if (el.closest('[data-spollers]').classList.contains('_spoller-init')) {
               const spollerTitle = el.closest('summary');
               const spollerBlock = spollerTitle.closest('details');
               const spollersBlock = spollerTitle.closest('[data-spollers]');
               const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
               const scrollSpoller = spollerBlock.hasAttribute('data-spoller-scroll');
               const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
               if (!spollersBlock.querySelectorAll('._slide').length) {
                  if (oneSpoller && !spollerBlock.open) {
                     hideSpollersBody(spollersBlock);
                  }

                  !spollerBlock.open ? spollerBlock.open = true : setTimeout(() => { spollerBlock.open = false }, spollerSpeed);

                  spollerTitle.classList.toggle('_spoller-active');
                  _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);

                  if (scrollSpoller && spollerTitle.classList.contains('_spoller-active')) {
                     const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                     const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                     const scrollSpollerNoHeader = spollerBlock.hasAttribute('data-spoller-scroll-noheader') ? document.querySelector('.header').offsetHeight : 0;

                     //setTimeout(() => {
                     window.scrollTo(
                        {
                           top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                           behavior: "smooth",
                        }
                     );
                     //}, spollerSpeed);
                  }
               }
            }
         }
         // Закриття при кліку поза спойлером
         if (!el.closest('[data-spollers]')) {
            const spollersClose = document.querySelectorAll('[data-spoller-close]');
            if (spollersClose.length) {
               spollersClose.forEach(spollerClose => {
                  const spollersBlock = spollerClose.closest('[data-spollers]');
                  const spollerCloseBlock = spollerClose.parentNode;
                  if (spollersBlock.classList.contains('_spoller-init')) {
                     const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                     spollerClose.classList.remove('_spoller-active');
                     _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                     setTimeout(() => { spollerCloseBlock.open = false }, spollerSpeed);
                  }
               });
            }
         }
      }
      function hideSpollersBody(spollersBlock) {
         const spollerActiveBlock = spollersBlock.querySelector('details[open]');
         if (spollerActiveBlock && !spollersBlock.querySelectorAll('._slide').length) {
            const spollerActiveTitle = spollerActiveBlock.querySelector('summary');
            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
            spollerActiveTitle.classList.remove('_spoller-active');
            _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
            setTimeout(() => { spollerActiveBlock.open = false }, spollerSpeed);
         }
      }
   }
}


export const Spollers = () => {
   return (
      <div className="spollers">
         <div className="spollers__container">
            <div data-spollers className="spollers__body">
               <details className="spollers__item">
                  <summary className="spollers__title">Заголовок спойлера</summary>
                  <div className="spollers__body">Контент спойлера</div>
               </details>
               <details className="spollers__item">
                  <summary className="spollers__title">Заголовок спойлера</summary>
                  <div className="spollers__body">Контент спойлера</div>
               </details>
               <details className="spollers__item">
                  <summary className="spollers__title">Заголовок спойлера</summary>
                  <div className="spollers__body">Контент спойлера</div>
               </details>
            </div>
         </div>
      </div>
   );
}