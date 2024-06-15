import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchBar extends Component {
  render() {
    return html`
      <form>
        <input type="text" placeholder="Search by location or trail name" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form
    `;
  }
}

