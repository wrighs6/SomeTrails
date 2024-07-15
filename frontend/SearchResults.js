import { Component } from 'preact';
import { html } from 'htm/preact';

// from https://stackoverflow.com/questions/4700226/truncating-text-and-append-an-ellipsis-using-javascript
const truncate = (input) => input.length > 400 ? `${input.substring(0, 400)}...` : input;

export default class SearchResults extends Component {

  scrollToSearchResults() {
    const homeSection = document.querySelector('.home');
    const offset = homeSection.getBoundingClientRect().bottom + window.scrollY + 30;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  componentDidMount() {
    this.scrollToSearchResults();
  }

  componentDidUpdate() {
    this.scrollToSearchResults();
  }

  render() {
    return html`
      <div class="search-result">
        ${
          this.props.results != undefined &&
          this.props.results.map((result, index) => html`
            <div class="result-item" onClick=${() => this.props.select(index)}>
              <div class="result-content">
                <div class="result-title">${result.name}</div>
                <div class="result-description">${truncate(result.description)}</div>
<<<<<<< Updated upstream
                <div class="result-location">Location: ${result.location}</div>
                <div class="result-difficulty">Difficulty: ${result.difficulty}</div>
                <div class="result-distance">Distance: ${result.distance} miles</div>
                <div class="result-elevationGain">Elevation gain: ${result.elevationGain} feet</div>
                <div class="result-time">Estimated time: ${result.time} minutes</div>
=======
                <div class="result-location">Located at: ${result.location}</div>
                <div class="result-difficulty">Difficulty rating: ${result.difficulty}/5</div>
                <div class="result-distance">Length of trail: ${result.distance} miles</div>
                <div class="result-elevationGain">Elevation gain: ${result.elevationGain} ft</div>
                <div class="result-time">Estimated time to complete: ${result.time} minutes</div>
>>>>>>> Stashed changes
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
