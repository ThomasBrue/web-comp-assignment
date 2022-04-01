import '@web-comp-app/shared/ui-components';

import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  const nameList = [
    'Sandy',
    'Alfred',
    'Maximilian',
    'Tadeus',
    'Spongebob',
    'James',
    'Lisa',
    'Sam',
    'Jack',
    'Simon',
    'Dr No',
    'Sebastian',
    'Franz',
    'Eva',
    'Manuel',
    'Karl',
  ];

  setTimeout(() => {
    console.log("wc-search-bar::: ", document.getElementsByTagName('wc-search-bar'));
  },1000);

  return (
    <div>
      <h1>React App</h1>
      <wc-search-bar   namelist={nameList}></wc-search-bar>
    </div>
  );


  
  
}

export default App;


// <wc-search-bar #searchBarId [attr.namelist]="nameList"></wc-search-bar>