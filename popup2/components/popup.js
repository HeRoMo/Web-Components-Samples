export default class PopupElement extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('div')
    template.innerHTML = this.template();
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

  template() {
    return `
      <style>
        #popup {
          display: none;
          position: fixed;
          background-color: rgba(0,0,0,0.3);
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
        }
        .dialog {
          background-color: white;
          width: 80vw;
          margin: 100px auto 0 auto;
          padding: 10px;
          border-radius: 5px;
        }
        .title { font-weight: bold; }
      </style>
      <div id="popup">
        <div class="dialog">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `
  }
}
