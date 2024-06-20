import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = { query: "", results: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const query = event.target.querySelector('input').value;
    let results = [`Result for "${query}"`];

    // Add sub-results for specific queries
    if (query.toLowerCase() === "trail") {
      results.push("Trail1", "Trail2");
    }

    this.setState({ query, results });
    document.querySelector('.search-result').style.display = 'block';
  }

  render() {
    return html`
      <form onSubmit=${this.handleSubmit}>
        <input type="text" placeholder="Search by location or trail name" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      <div class="search-result">
        ${this.state.results.map(result => html`<div class="result-item">${result}</div>`)}
      </div>
    `;
  }
}
