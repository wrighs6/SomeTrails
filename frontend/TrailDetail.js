import { Component } from 'preact';
import { html } from 'htm/preact';

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

import Map from './Map.js';
import ImageSlideshow from "./ImageSlideshow.js";

// TrailDetail displays all data related to a trail, including a Map of the trail

export default class TrailDetail extends Component {
  componentDidMount() {
    fetch(`https://api.${window.location.host}/${this.props.selected}`)
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
        .catch(error => console.error('Error fetching data:', error));
  }

  render(_, {data}) {
    if (data)
      return html`
      <div class="trail-detail">
        <header>
          <button onClick=${this.props.back}>Back</button>
        </header>
        <div class="detail-card">
          <h1>${data.name}</h1>
          <p class="detail-tags">${data.tags.join(", ")}</p>
          <p><a href="">${data.location}</a></p>
          <div class="detail-stats">
            <span>Difficulty: ${data.difficulty}</span>
            <span>Length: ${formatNumber(data.distance)} Miles</span>
            <span>Time to complete: ${formatTime(data.time)}</span>
            <span>Elevation gain: ${formatNumber(data.elevationGain)} feet</span>
            <span>Maximum elevation: ${formatNumber(data.maximumElevation)} feet</span>
          </div>
          <p>${data.description}</p>
        </div>
        <div class="detail-card">
          <div class="detail-half">
            <${Map} path=${data.path} name=${data.name} />
          </div>
          <div class="detail-half">
            <${ImageSlideshow} slides=${data.images} />
          </div>
        </div>
      </div>`;
  }
}
