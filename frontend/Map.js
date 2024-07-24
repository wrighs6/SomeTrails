import { Component } from 'preact';
import { html } from 'htm/preact';

export default class Map extends Component {
  componentDidMount() {
    const path = this.props.path;

    const map = L.map('map').setView([path[0][1], path[0][0]], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.geoJSON({ type: "LineString", coordinates: path }).addTo(map);
  }

  render() {
    return html`
      <div id="map"></div>
    `
  }
}
