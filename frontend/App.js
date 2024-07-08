import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';
import SearchResults from './SearchResults.js';
import TrailDetail from './TrailDetail.js';

class App extends Component {
  search = (q) => this.setState({ query: q });
  select = (id) => this.setState({ selected: id });

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query != this.state.query) {
      fetch(`https://api.${window.location.host}/`)
        .then(response => response.json())
        .then(data => this.setState({ trails: data}))
        .catch(error => console.error('Error fetching data:', error));
    }
  }

  render() {
    const { trails, selected, query } = this.state;

    if (selected === undefined)
      return html`
        <${Home} search=${this.search} />
        ${query !== undefined && html`<${SearchResults} results=${trails} query=${query} select=${this.select} />`}
      `;
    else
      return html`<${TrailDetail} selected=${trails[selected]} back=${() => this.setState({ selected: undefined })} />`;
  }
}

render(html`<${App} />`, document.body);
