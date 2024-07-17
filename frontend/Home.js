import { Component } from 'preact';
import { html } from 'htm/preact';
import SearchBar from './SearchBar.js';

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
