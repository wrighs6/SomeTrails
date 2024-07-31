import { Component } from 'preact';
import { html } from 'htm/preact';

const formatNumber = (number) => parseFloat(number).toFixed(2);

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
          <p><a href="">${data.location}</a></p>
          <div class="detail-stats">
            <span>Difficulty: ${data.difficulty}</span>
            <span>Length: ${formatNumber(data.distance)} Miles</span>
            <span>Time to complete: ${formatNumber(data.time)} minutes</span>
            <span>Elevation gain: ${formatNumber(data.elevationGain)} feet</span>
            <span>Maximum elevation: ${formatNumber(data.maximumElevation)} feet</span>
          </div>
          <p>${data.description}</p>
        </div>
      </div>`;
  }
}
