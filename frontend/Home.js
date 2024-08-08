import { Component } from 'preact';
import { html } from 'htm/preact';
import SearchBar from './SearchBar.js';

// Home simply contains the header and a SearchBar
// Home expects to be provided a search function in its props, and passes it on to the search bar

export default class Home extends Component {
  render() {
    return html`
      <div class="home">
        <h1>SomeTrails</h1>
        <h2>Find your path</h2>
        <${SearchBar} search=${this.props.search} />
      </div>
    `;
  }
}
