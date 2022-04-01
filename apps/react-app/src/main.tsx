import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);


// console.log(document.getElementsByTagName('wc-search-bar'))

// const searchBar = document.getElementsByTagName('wc-search-bar')


// searchBar.addEventListener(
//   'onBlurEvent',
//   (evt: any) => {
//     console.log(evt);
//     this.items.push(evt.detail);
//   }
// );