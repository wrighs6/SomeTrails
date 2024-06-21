import { Component } from 'preact';
import { html } from 'htm/preact';

export default class TrailDetail extends Component {
  render() {
    console.log(`displaying trail ${this.props.selected}`);

    return html`<div class="trail-detail">
      <div class="detail-card">
        <h1>Trail Name Here</h1>
        <p><a href="">Location Here</a></p>
        <div class="detail-stats">
          <span>Difficulty: Placeholder</span>
          <span>Length: Placeholder</span>
          <span>Time to complete: Placeholder</span>
          <span>Elevation gain: Placeholder</span>
          <span>Highest elevation: Placeholder</span>
        </div>
        <p>Description will go here</p>
      </div>
    </div>`;
  }
}
