/* eslint-disable @typescript-eslint/no-non-null-assertion */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'wc-search-bar': { namelist: string[] };
    }
  }
}

const template = document.createElement('template');
template.setAttribute('id', 'template');
template.innerHTML = `
<div id="myroot"><div>
`;

export class SearchBarElement extends HTMLElement {
  shadow: any;

  public static get observedAttributes() {
    return ['namelist'];
  }

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    const myInput = document.createElement('input');
    myInput.setAttribute('id', 'myInputField');
    myInput.setAttribute('list', 'customers');
    this.shadow.appendChild(myInput);

    const dataList = document.createElement('datalist');
    dataList.setAttribute('id', 'customers');
    this.shadow.appendChild(dataList);

    myInput.onblur = (evt) => {
      console.log(this.shadow.getElementById('myInputField'));

      const value = (
        this.shadow.getElementById('myInputField') as HTMLInputElement
      ).value;
      console.log('OnBlur_Event', value);

      this.dispatchEvent(
        new CustomEvent('onBlurEvent', {
          detail: value,
        })
      );
    };
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: string) {
    const nameList: string[] = newValue.split(',');

    for (const customerName of nameList) {
      const el = document.createElement('option');
      el.setAttribute('value', customerName);
      this.shadow.getElementById('customers')?.appendChild(el);
    }
  }

  connectedCallback() {
    console.log('connectedCallback_Lifecycle_Hook');
  }
}

customElements.get('wc-search-bar') ||
  customElements.define('wc-search-bar', SearchBarElement);
