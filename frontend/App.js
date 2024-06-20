import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';
import SearchResults from './SearchResults.js';

class App extends Component {
  search = (q) => this.setState({ query: q });
  select = (id) => this.setState({ selected: id });

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.selected !== this.state.selected) {
      console.log(`Trail selected: ${this.state.selected}`);
    }
  }

  render() {
    return html`
      <${Home} search=${this.search} />
      ${this.state.query !== undefined ? html`<${SearchResults} query=${this.state.query} select=${this.select} />` : ""}
    `;
  }
}

render(html`<${App} />`, document.body);
