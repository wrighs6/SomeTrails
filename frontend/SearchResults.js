import { Component } from 'preact';
import { html } from 'htm/preact';
import ImageSlideshow from "./ImageSlideshow.js";

// Truncate the text and append an ellipsis if it's too long
const truncate = (input) => input.length > 400 ? `${input.substring(0, 400)}... (Click to view more)` : input;

// Helper function to format numbers to two decimal places
const formatNumber = (number) => parseFloat(number).toFixed(2);

export default class SearchResults extends Component {
  state = {
    slides: [],
  };

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
    const slides = [
      { url: "https://www.tastingtable.com/img/gallery/how-does-baby-arugula-compare-to-regular-arugula/intro-1678995762.jpg", title: "arugula" },
      { url: "https://www.allrecipes.com/thmb/TkTP3fQnTpMhNtC_n4HMmCsIwsE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222352-jamies-sweet-and-easy-corn-on-the-cob-rae-3x2-1-de041c9cd6ab4b40808368dc5cd96757.jpg", title: "corn" },
    ];
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
                <div class="result-description">${truncate(result.description)}</div>
                <div class="result-location">Located at: ${result.location}</div>
                <div class="result-difficulty">Difficulty rating: ${result.difficulty}/5</div>
                <div class="result-distance">Length of trail: ${formatNumber(result.distance)} miles</div>
                <div class="result-elevationGain">Elevation gain: ${formatNumber(result.elevationGain)} ft</div>
                <div class="result-maximumElevation">Maximum elevation: ${formatNumber(result.maximumElevation)} ft</div>
                <div class="result-time">Estimated time to complete: ${formatNumber(result.time)} minutes</div>
              </div>
                <div style=${containerStyles}>
                  <${ImageSlideshow} slides=${slides} />
                </div>
            </div>
          `)
        }
      </div>
    `;
  }
}


{/* <div class="image-container">
                <img class="result-image" src=${result.images[0]} alt=${result.title} />
              </div> */}
