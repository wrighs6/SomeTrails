import { Component } from 'preact';
import { html } from 'htm/preact';
import { useState } from 'preact/hooks'

export default class TrailDetail extends Component {
  render() {
    console.log(this.props.selected);
    return html`
    <div class="trail-detail">
      <header>
        <button onClick=${this.props.back}>Back</button>
      </header>
      <div class="detail-card">
        <h1>${this.props.selected.name}</h1>
        <p><a href="">${this.props.selected.location}</a></p>
        <div class="detail-stats">
          <span>Difficulty: ${this.props.selected.difficulty}</span>
          <span>Length: ${this.props.selected.distance} Miles</span>
          <span>Time to complete: ${this.props.selected.time} minutes</span>
          <span>Elevation gain: ${this.props.selected.elevationGain} feet</span>
          <span>Maximum elevation: ${this.props.selected.maximumElevation} feet</span>
        </div>
        <p>${this.props.selected.description}</p>
      </div>
    </div>`;
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
