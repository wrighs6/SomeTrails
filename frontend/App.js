import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';

class App extends Component {
  search = (q) => this.setState({ query: q });

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.query !== this.state.query) {
      console.log(`Search performed: ${this.state.query}`);
    }
  }

  render() {
    return html`<${Home} search=${this.search} />`;
  }
}

render(html`<${App} />`, document.body);
