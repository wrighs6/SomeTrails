import { Component } from 'preact';
import { html } from 'htm/preact';

// from https://stackoverflow.com/questions/4700226/truncating-text-and-append-an-ellipsis-using-javascript
const truncate = (input) => input.length > 400 ? `${input.substring(0, 400)}...` : input;

export default class SearchResults extends Component {
  render() {
    return html`
      <div class="search-result">
        <div class="main-result">Results for "${this.props.query}"</div>
        ${
          this.props.results != undefined &&
          this.props.results.map((result, index) => html`
            <div class="result-item" onClick=${() => this.props.select(index)}>
              <div class="result-content">
                <div class="result-title">${result.name}</div>
                <div class="result-description">${truncate(result.description)}</div>
                <div class="result-location">${result.location}</div>
                <div class="result-difficulty">${result.difficulty}</div>
                <div class="result-distance">${result.distance}</div>
                <div class="result-elevationGain">${result.elevationGain}</div>
                <div class="result-time">${result.time}</div>
              </div>
              <div class="image-container">
                <img class="result-image" src=${result.images[0]} alt=${result.title} />
              </div>
            </div>
          `)
        }
      </div>
    `;
  }
}
