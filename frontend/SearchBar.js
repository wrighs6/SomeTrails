import { Component } from 'preact';
import { html } from 'htm/preact';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { query: '', result: '' };
  }

  handleInput = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ result: `You searched for: ${this.state.query}` });
    const resultElement = document.querySelector('.search-result');
    if (resultElement) {
      resultElement.style.display = 'block'; // Show the result element
    }
  }

  render() {
    return html`
      <div>
        <form onSubmit=${this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Search by location or trail name" 
            value=${this.state.query}
            onInput=${this.handleInput} 
          />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <div class="search-result">
          <p>${this.state.result}</p>
        </div>
      </div>
    `;
  }
}

export default SearchBar;
