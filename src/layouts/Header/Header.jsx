// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { InventoryButton, RequestButton } from '../../components/Buttons/Buttons';


// Import
import "./Header.scss";


function Header() {

   return (
      <header className="header">
         <div className="header__container">
            <div className="header__body">
               <div className="logo"></div>

               <div className="header__block">
                  <div className="header__button-box">
                     <InventoryButton/>
                     <RequestButton/>
                  </div>

               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;