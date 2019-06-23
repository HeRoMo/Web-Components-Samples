export default class HelloCustomElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = 'Hello! My Custom Element';
  }
}

customElements.define('hello-custom-element', HelloCustomElement);
