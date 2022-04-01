export class ClickCounter extends HTMLElement {
  _timesClicked: any;

  constructor() {
    super();
  }

  connectedCallback() {
    this._timesClicked = 0;

    // onfocusout

    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.onclick = (evt) => {
      this._timesClicked++;

      this.dispatchEvent(
        new CustomEvent('clicked', {
          detail: this._timesClicked,
        })
      );
    };

    document.getElementsByTagName('click-counter')[0].appendChild(button);

    const inputField = document.createElement('input');
    // inputField.textContent = 'Click me';
    console.log('Input: ', inputField);

    inputField.onblur = (evt) => {
      this._timesClicked++;

      this.dispatchEvent(
        new CustomEvent('clicked', {
          detail: this._timesClicked,
        })
      );
    };

    document.getElementsByTagName('click-counter')[0].appendChild(inputField);
  }
}
customElements.define('click-counter', ClickCounter);
