import { Component } from 'preact';
import { html } from 'htm/preact';

// A simple form with a text input field
// On form submission, SearchBar sends the search query back up to App using a provided search function

export default class SearchBar extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.querySelector('input').value.trim();
    this.props.search(query);
  }

  render() {
    return html`
      <form onSubmit=${this.handleSubmit}>
        <input type="text" placeholder="Search by location or trail name" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    `;
  }
}
