export class MyCounter extends HTMLElement {
  shadow: any;
  //   count = 0;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get count() {
    return this.getAttribute('count');
  }

  set count(newVal: any) {
    this.setAttribute('count', newVal);
  }

  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(prop: string, oldVal: any, newVal: any) {
    if (prop === 'count') {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <h1>Counter</h1>
    ${this.count}
    <button id="btn">Increment</button>
    `;
  }
}

customElements.define('my-counter', MyCounter);
