/* eslint-disable @typescript-eslint/no-non-null-assertion */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'wc-search-bar': { namelist: string };
    }
  }
}

export class SearchBarElement extends HTMLElement {
  public static get observedAttributes() {
    return ['namelist'];
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: string) {
    const nameList: string[] = newValue.split(',');
    this.makeDataList(nameList);
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

customElements.get('wc-search-bar') ||
  customElements.define('wc-search-bar', SearchBarElement);
