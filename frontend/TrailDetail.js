import { Component } from 'preact';
import { html } from 'htm/preact';

export default class TrailDetail extends Component {
  render() {
    return html`<p>Trail name: ${this.props.selected}</p>`;
  }
}
