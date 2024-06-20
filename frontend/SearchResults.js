import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchResults extends Component {
  render() {
    let results = [`Results for "${this.props.query}"`];

    if (this.props.query.toLowerCase() === "trail") {
      results.push("Trail1", "Trail2", "Trail3", "Trail4", "Trail5");
    }

    return html`
      <div class="search-result">
        <div class="main-result">${results[0]}</div>
        ${results.slice(1).map(result => html`<div class="result-item">${result}</div>`)}
      </div>
    `;
  }
}
