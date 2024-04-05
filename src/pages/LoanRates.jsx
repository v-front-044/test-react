import chevrolet from '../assets/images/all-cars/chevrolet.png';

import { BgTitle } from '../components/BgTitle/BgTitle';
import { MainContent } from '../components/_Sections/MainContent/MainContent';

import { HowMuch } from '../components/_Sections/HowMuch/HowMuch';
import { InterestRates } from '../components/_Sections/InterestRates/InterestRates';


export function LoanRates() {
   const title = 'Loan rates';

   const mainData = {
      title: 'Our credit policy',
      text: 'You want to secure a loan that works for your budget. Here at CM we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.',
      image: chevrolet
   };


   return (
      <>
         <BgTitle title={title} />
         <MainContent data={mainData} />
         <InterestRates />
         <HowMuch className={'section about'} />
      </>
   );
}