import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';
import SearchResults from './SearchResults.js';

class App extends Component {
  search = (q) => this.setState({ query: q });

  render() {
    return html`
      <${Home} search=${this.search} />
      ${this.state.query !== undefined ? html`<${SearchResults} query=${this.state.query} />` : ""}
    `;
  }
}

render(html`<${App} />`, document.body);
