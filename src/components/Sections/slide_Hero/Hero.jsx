/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'antd';

import styles from './Hero.module.scss';

import main_1 from '@img/main/main-1.webp';
import main_2 from '@img/main/main-2.webp';
import main_3 from '@img/main/main-3.webp';
import main_4 from '@img/main/main-4.webp';


const contentStyle = {
   margin: 0,
   height: '500px',
   color: '#fff',
   lineHeight: '100%',
   textAlign: 'center',
   background: '#364d79',
};

const Hero_1 = () => {

   return (
      <section className={styles.hero}>
         <div className={styles.hero__container}>
            <Carousel >
               <div>
                  <h3 style={contentStyle}>
                     <img src={main_1} alt="Image background" />
                  </h3>
               </div>
               <div>
                  <h3 style={contentStyle}>
                     <img src={main_2} alt="Image background" />
                  </h3>
               </div>
               <div>
                  <h3 style={contentStyle}>
                     <img src={main_3} alt="Image background" />
                  </h3>
               </div>
               <div>
                  <h3 style={contentStyle}>
                     <img src={main_4} alt="Image background" />
                  </h3>
               </div>
            </Carousel>
         </div>
      </section>
   );
};

export default Hero_1;