import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchResults extends Component {
  render() {
    let results = [`Result for "${this.props.query}"`];

    
    if (this.props.query.toLowerCase() === "trail") {
      results.push(
        { title: "Trail1", description: "This is a description for Trail1." },
        { title: "Trail2", description: "This is a description for Trail2." },
        { title: "Trail3", description: "This is a description for Trail3." },
        { title: "Trail4", description: "This is a description for Trail4." },
        { title: "Trail5", description: "This is a description for Trail5." }
      );
    }

    return html`
      <div class="search-result">
        <div class="main-result">${results[0]}</div>
        ${results.slice(1).map(result => html`
          <div class="result-item">
            <div class="result-title">${result.title}</div>
            <div class="result-description">${result.description}</div>
          </div>
        `)}
      </div>
    `;
  }
}
