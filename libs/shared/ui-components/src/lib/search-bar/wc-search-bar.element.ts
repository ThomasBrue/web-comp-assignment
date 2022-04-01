// create type for React app
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'wc-counter-value': { count: number };
    }
  }
}

export class SearchBarElement extends HTMLElement {
  public static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    const count = this.querySelector('#count');

    if (count) {
      count!.textContent = newValue;
    }
  }

  connectedCallback() {
    // this.setAttribute('count', '7');
    this.innerHTML = `
       <h3>NEW_COMPONENT: Counter value is <span id="count">${this.getAttribute(
         'count'
       )}</span></h3>
       
       
       <input list="browsers" name="browser" id="browser">
       <datalist id="browsers">
         <option value="Edge">
         <option value="Firefox">
         <option value="Chrome">
         <option value="Opera">
         <option value="Safari">
       </datalist>

       `;
  }
}
// define element if it doesn't exist
customElements.get('wc-search-bar') ||
  customElements.define('wc-search-bar', SearchBarElement);
