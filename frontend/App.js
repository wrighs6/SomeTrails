import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';
import SearchResults from './SearchResults.js';
import TrailDetail from './TrailDetail.js';

class App extends Component {
  search = (q) => this.setState({ query: q });
  select = (id) => this.setState({ selected: id });

  render() {
    const { selected, query } = this.state;

    if (selected === undefined)
      return html`
        <${Home} search=${this.search} />
        ${query !== undefined && html`<${SearchResults} query=${query} select=${this.select} />`}
      `;
    else
      return html`<${TrailDetail} selected=${selected} back=${() => this.setState({ selected: undefined })} />`;
  }
}

render(html`<${App} />`, document.body);
