// BackToTopButton.js
import { Component } from 'preact';
import { html } from 'htm/preact';

class BackToTopButton extends Component {
  constructor() {
    super();
    this.state = { isVisible: false };
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const showButton = window.scrollY > 300; // Adjust this value as needed
    this.setState({ isVisible: showButton });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return html`
      <button 
        class="back-to-top ${this.state.isVisible ? 'visible' : 'hidden'}" 
        onClick=${this.scrollToTop}
      >
        <!-- SVG Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
          <!-- <title>Back To Top</title> -->
          <g fill="#212121">
            <path fill="none" stroke="#f3fff2" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328L256 184 400 328"></path>
          </g>
        </svg>
      </button>
    `;
  }
}

export default BackToTopButton;
