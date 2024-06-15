import { Component } from 'preact';
import { html } from 'htm/preact';
import SearchBar from './SearchBar.js';

export default class Home extends Component {
  render() {
    return html`
    <main class="home">
      <div class="welcome">
        <h1>SomeTrails</h1>
        <h2>Find your path</h2>
        <${SearchBar} />
      </div>
    </main>
    `;
  }
}
