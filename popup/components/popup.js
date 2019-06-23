export default class PopupElement extends HTMLElement {
  constructor() {
    super();
    const template = document.querySelector('template#popup-tmpl').content.cloneNode(true)
    const popup = template.querySelector('#popup');
    popup.addEventListener('click', function() {
      popup.style.display = 'none';
    })

    const button = document.createElement('button')
    button.innerHTML = 'OPEN'
    button.addEventListener('click', function() {
      popup.style.display = 'block';
    });

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template);
    shadowRoot.appendChild(button);
  }
}
