import privacyData from '@pathData/Privacy/_privacyData.json';

import Rules from '../../components/Sections/Rules/Rules';


export function Privacy() {
   return (
      <>
         <Rules pageTitle={privacyData.pageTitle} sections={privacyData.sections} />
      </>
   );
}