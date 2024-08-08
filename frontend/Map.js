import { Component } from 'preact';
import { html } from 'htm/preact';

// The Map component makes use of the Leaflet library to display an interactive map of a trail
// The trail's path field is used as a GeoJSON LineString for this purpose

export default class Map extends Component {
  componentDidMount() {
    const path = this.props.path;

    const map = L.map('map').setView([path[0][1], path[0][0]], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.geoJSON({ type: "LineString", coordinates: path }).addTo(map);
    map.fitBounds(L.geoJSON({ type: "LineString", coordinates: path }).getBounds());
  }

  render() {
    return html`
      <div id="map"></div>
    `
  }
}
