/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

  inputValue = '';

  attributeChangedCallback(name: any, oldValue: any, newValue: string[]) {
    this.makeDataList(['James', 'Lisa', 'Sam', 'Jack']);
    // this.makeDataList(newValue);

    console.log('newValue:: ', newValue);
  }

  connectedCallback() {
    console.log('connectedCallback_Lifecycle_Hook');
  }

  makeDataList(myData: string[]) {
    const myInput = document.createElement('input');

    myInput.setAttribute('id', 'myInputField');
    myInput.setAttribute('list', 'customers');

    document.getElementsByTagName('wc-search-bar')[0].appendChild(myInput);
    document.getElementById('myInputField')!.style[<any>'background-color'] =
      'cyan';

    const dataList = document.createElement('datalist');
    dataList.setAttribute('id', 'customers');

    document.getElementsByTagName('wc-search-bar')[0].appendChild(dataList);

    for (const customerName of myData) {
      const el = document.createElement('option');
      el.setAttribute('value', customerName);
      document.getElementById('customers')?.appendChild(el);
    }

    myInput.onblur = (evt) => {
      console.log(document.getElementById('myInputField'));

      const value = (
        document.getElementById('myInputField') as HTMLInputElement
      ).value;
      console.log('OnBlur_Event', value);

      this.dispatchEvent(
        new CustomEvent('onBlurEvent', {
          detail: value,
        })
      );
    };
  }
}
// define element if it doesn't exist
customElements.get('wc-search-bar') ||
  customElements.define('wc-search-bar', SearchBarElement);
