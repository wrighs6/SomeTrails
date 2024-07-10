import { Component } from 'preact';
import { html } from 'htm/preact';

export default class TrailDetail extends Component {
  render() {
    console.log(this.props.selected);
    return html`<div class="trail-detail">
      <div class="detail-card">
        <h1>${this.props.selected.name}</h1>
        <p><a href="">${this.props.selected.location}</a></p>
        <div class="detail-stats">
          <span>Difficulty: ${this.props.selected.difficulty}</span>
          <span>Length: ${this.props.selected.distance} Miles</span>
          <span>Time to complete: ${this.props.selected.time} minutes</span>
          <span>Elevation gain: ${this.props.selected.elevationGain} feet</span>
          <span>Highest elevation: Placeholder</span>
        </div>
        <p>${this.props.selected.description}</p>
      </div>
    </div>`;
  }
}
