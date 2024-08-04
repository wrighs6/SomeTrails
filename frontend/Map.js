import { Component } from 'preact';
import { html } from 'htm/preact';

export default class Map extends Component {
  componentDidMount() {
    const path = this.props.path;

    let minlon = path[0][0];
    let maxlon = path[0][0];
    let minlat = path[0][1];
    let maxlat = path[0][1];

    for (const c of path) {
      if (c[0] < minlon)
        minlon = c[0];
      if (c[0] > maxlon)
        maxlon = c[0];
      if (c[1] < minlat)
        minlat = c[1];
      if (c[1] > maxlat)
        maxlat = c[1];
    }

    const map = L.map('map').setView([(maxlat + minlat) / 2, (maxlon + minlon) / 2], 14);

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
