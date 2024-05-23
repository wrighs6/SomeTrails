import { render } from 'preact';
import { html } from 'htm/preact';

function App() {

  return html`
    <p>Hello, world!</p>
  `;
}

render(html`<${App} />`, document.body);
