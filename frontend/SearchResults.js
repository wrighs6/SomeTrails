import { Component } from 'preact';
import { html } from 'htm/preact';
import ImageSlideshow from "./ImageSlideshow.js";

// Truncate the text and append an ellipsis if it's too long
const truncate = (input) => input.length > 400 ? `${input.substring(0, 400)}... (Click to view more)` : input;

// Helper function to format numbers to two decimal places
const formatNumber = (number) => parseFloat(number).toFixed(2);

//Helper function to set time to hrs, min
const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);  // Calculate the whole hours
  const remainingMinutes = Math.round(minutes % 60);  // Calculate the remaining minutes

  if (hours === 0) {
    return `${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
  } else {
  return `${hours} hour${hours !== 1 ? 's' : ''} and ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
  }
}

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
    const containerStyles = {
      width: "500px",
      height: "280px",
      margin: "0 auto",
    };
    return html`
      <div class="search-result">
        ${
          this.props.results != undefined &&
          this.props.results.map((result, index) => html`
            <div class="result-item" onClick=${() => this.props.select(result.id)}>
              <div class="result-content">
                <div class="result-title">${result.name}</div>
                <div class="result-tags">${result.tags.join(", ")}</div>
                <div class="result-description">${truncate(result.description)}</div>
                <div class="result-location">Located at: ${result.location}</div>
                <div class="result-difficulty">Difficulty rating: ${result.difficulty}/5</div>
                <div class="result-distance">Length of trail: ${formatNumber(result.distance)} miles</div>
                <div class="result-elevationGain">Elevation gain: ${formatNumber(result.elevationGain)} ft</div>
                <div class="result-maximumElevation">Maximum elevation: ${formatNumber(result.maximumElevation)} ft</div>
                <div class="result-time">Estimated time to complete: ${formatTime(result.time)}</div>
              </div>
              <div style=${containerStyles}>
                <${ImageSlideshow} slides=${result.images} />
              </div>
            </div>
          `)
        }
      </div>
    `;
  }
}
