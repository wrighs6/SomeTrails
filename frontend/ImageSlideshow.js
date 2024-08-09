import { Component, render } from 'preact';
import { html } from 'htm/preact';

const slideStyles = {
  width: "100%",
  height: "90%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative"
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const slideshowStyles = {
  height: "100%"
};

const dotsContainerStyles = {
  width: "100%",
  textAlign: "center"
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

// ImageSlideshow displays several images and gives the user controls for moving between images

export default class ImageSlideshow extends Component {
  
  state = {
    currentIndex: 0

  };
  goToPrevious = () => {
    const isFirstSlide = this.state.currentIndex == 0;
    const newIndex = isFirstSlide ? this.props.slides.length - 1 : this.state.currentIndex - 1;
    this.setState({currentIndex: newIndex})
  };
  goToNext = () => {
    const isLastSlide = this.state.currentIndex == this.props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.state.currentIndex + 1;
    this.setState({ currentIndex: newIndex });

  };
  goToSlide = (slideIndex) => {
    this.setState({ currentIndex: slideIndex });
  };

render() {
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: this.props.slides && this.props.slides[this.state.currentIndex]
      ? `url(${this.props.slides[this.state.currentIndex]})`
      : 'url(https://www.travelandleisure.com/thmb/KTIha5CLifSoUD3gx0YP51xc3rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue0517-4dfc85cb0200460ab717b101ac07888f.jpg)', // Fallback URL
  };

  return html`
    <div style=${slideshowStyles} onClick=${event => event.stopPropagation()}>
      <div style=${slideStylesWidthBackground}>
        <div onClick=${this.goToPrevious} style=${leftArrowStyles}>
          ❰
        </div>
        <div onClick=${this.goToNext} style=${rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style=${dotsContainerStyles}>
        ${this.props.slides.map((slide, slideIndex) => (
          html`<span
            style=${dotStyle}
            key=${slideIndex}
            onClick=${() => this.goToSlide(slideIndex)}
          >
            ●
          </span>`
        ))}
      </div>
    </div>
  `;
}
};
