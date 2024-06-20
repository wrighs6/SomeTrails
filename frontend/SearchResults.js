import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchResults extends Component {
  render() {
    let results = [`Result for "${this.props.query}"`];

    // Add sub-results for specific queries
    if (this.props.query.toLowerCase() === "trail")
      results.push("Trail1", "Trail2");

      return html`
        <div class="search-result">
          ${results.map(result => html`<div class="result-item">${result}</div>`)}
        </div>
      `;
    }
}
