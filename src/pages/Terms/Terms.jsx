import termsData from '@pathData/Terms/_termsData.json';

import Rules from '../../components/Sections/Rules/Rules';


export function Terms() {
   return (
      <>
         <Rules pageTitle={termsData.pageTitle} sections={termsData.sections} />;
      </>
   );
}