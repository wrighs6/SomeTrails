import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchBar extends Component {
  state = { query: "", results: [] };

  handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.querySelector('input').value;
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
