import { Component, render } from 'preact';
import { html } from 'htm/preact';

class App extends Component {
  componentDidMount() {
    this.setState({ view: "home" });
  }

  render() {
    return html`<p>current state: ${this.state.view}</p>`;
  }
}

render(html`<${App} />`, document.body);
