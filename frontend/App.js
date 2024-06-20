import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';

class App extends Component {
  state = { view: "home" };

  render() {
    return html`<${Home} />`;
  }
}

render(html`<${App} />`, document.body);
