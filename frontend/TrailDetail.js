import { Component } from 'preact';
import { html } from 'htm/preact';
import { useState } from 'preact/hooks'

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
            <span>Time to complete: ${parseFloat(data.time).toFixed()} minutes</span>
            <span>Elevation gain: ${formatNumber(data.elevationGain)} feet</span>
            <span>Maximum elevation: ${formatNumber(data.maximumElevation)} feet</span>
          </div>
          <p>${data.description}</p>
        </div>
      </div>
      `;
  }
  // ImageSlider = ({ slides }) => {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   const sliderStyles = {
  //     height: "100%",
  //     position: "relative",
  //   };

  //   const slideStyles = {
  //     width: "100%",
  //     height: "100%",
  //     borderRadius: "10px",
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundImage: `url(${slides[currentIndex].url})`
  //   };

  //   const rightArrowStyles = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translate(0, -50%)",
  //     right: "32px",
  //     fontSize: "45px",
  //     color: "#fff",
  //     zIndex: 1,
  //     cursor: "pointer",
  //   };
    
  //   const leftArrowStyles = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translate(0, -50%)",
  //     left: "32px",
  //     fontSize: "45px",
  //     color: "#fff",
  //     zIndex: 1,
  //     cursor: "pointer",
  //   };

  //   return (
  //     <div style={sliderStyles}>
  //       <div style={leftArrowStyles}>❰</div>
  //       <div style={rightArrowStyles}>❱</div>
  //       <div style={slideStyles}></div>
  //     </div>
  //   );

  // };

}
