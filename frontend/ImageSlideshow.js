import { useState } from 'preact/hooks'
import { Component, render } from 'preact';
import { html } from 'htm/preact';

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const slideshowStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};


export default class ImageSlideshow extends Component {
  //const [currentIndex, setCurrentIndex] = 0;
  index = {
    currentIndex: 0,
    setCurrentIndex: 0,
  };
  goToPrevious = () => {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.props.slides.length - 1 : this.currentIndex - 1;
    this.setCurrentIndex(newIndex);
  };
  goToNext = () => {
    const isLastSlide = this.currentIndex === this.props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.setCurrentIndex(newIndex);
  };
  goToSlide = (slideIndex) => {
    this.setCurrentIndex(slideIndex);
  };
  slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${this.props.slides[this.currentIndex].url})`,
  };
render() {
  return html`
    <div style=${slideshowStyles}>
      <div>
        <div onClick=${goToPrevious} style=${leftArrowStyles}>
          ❰
        </div>
        <div onClick=${goToNext} style=${rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style=${slideStylesWidthBackground}></div>
      <div style=${dotsContainerStyles}>
        ${this.props.slides.map((slide, slideIndex) => (
          html`<div
            style=${dotStyle}
            key=${slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>`
        ))}
      </div>
    </div>
  `
}
};