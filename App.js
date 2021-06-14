import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
   const rowData = [
       {country: "India", currency: "Rupees"},
       {country: "America", currency: "Dollor"},
       {country: "Austria", currency: "Euro"}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="country"></AgGridColumn>
               <AgGridColumn field="currency"></AgGridColumn>
               
           </AgGridReact>
       </div>
   );
};

export default App;