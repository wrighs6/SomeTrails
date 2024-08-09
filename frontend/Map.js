import { Component } from "preact";
import { html } from "htm/preact";

// The Map component makes use of the Leaflet library to display an interactive map of a trail
// The trail's path field is used as a GeoJSON LineString for this purpose

export default class Map extends Component {
  componentDidMount() {
    const geojson = {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: this.props.path
      },
      properties: {
        name: this.props.name
      }
    }

    const map = L.map("map").setView([this.props.path[0][1], this.props.path[0][0]], 12);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.geoJSON(geojson).addTo(map);
    map.fitBounds(L.geoJSON(geojson).getBounds());

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(geojson));

    const download = L.control({position: "topright"});
    download.onAdd = function(map){
        var div = L.DomUtil.create("div", "leaflet-control-attribution leaflet-control download");
        div.innerHTML = `<a href=${dataStr} download="path.json">Download Path</a>`;
        return div;
    };
    download.addTo(map);
  }

  render() {
    return html`
      <div id="map"></div>
    `
  }
}
