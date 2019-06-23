export default class PopupElement extends HTMLElement {
  constructor() {
    super();

    // テンプレートの読み込み
    const template = document.createElement('div')
    template.innerHTML = this.template(this.title, this.content);

    // #popup を取り出してクリックしたら閉じる様にイベントを追加
    const popup = template.querySelector('#popup');

    popup.addEventListener('click', function() {
      popup.style.display = 'none';
    })

    // ダイアログを開くボタンはDOMで作る
    const button = document.createElement('button')
    button.innerHTML = 'OPEN'
    button.addEventListener('click', function() {
      popup.style.display = 'block';
    });

    // テンプレートとボタンをShadow DOMに追加する
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template);
    shadowRoot.appendChild(button);
  }

  get title() {
    return this.getAttribute('title');
  }

  get content() {
    return this.getAttribute('content');
  }

  template(title, content) {
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
            ${title}
          </div>
          <div class="content">
            ${content}
          </div>
        </div>
      </div>
    `
  }
}
