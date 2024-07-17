import { Component } from 'preact';
import { html } from 'htm/preact';

export default class Filters extends Component {
  state = {
    difficulty: '',
    distance: '',
    elevationGain: ''
  };

  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.props.onFilterChange(this.state);
    });
  }

  render() {
    return html`
      <div class="filters-container">
        <div class="filters">
          <div class="dropdown">
            <label for="difficulty">Difficulty</label>
            <select id="difficulty" name="difficulty" onChange=${this.handleFilterChange}>
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="distance">Distance</label>
            <select id="distance" name="distance" onChange=${this.handleFilterChange}>
              <option value="">Select Distance</option>
              <option value="short">Short (0-5 miles)</option>
              <option value="medium">Medium (5-10 miles)</option>
              <option value="long">Long (10+ miles)</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="elevationGain">Elevation Gain</label>
            <select id="elevationGain" name="elevationGain" onChange=${this.handleFilterChange}>
              <option value="">Select Elevation Gain</option>
              <option value="low">Low (0-500 feet)</option>
              <option value="medium">Medium (500-1000 feet)</option>
              <option value="high">High (1000+ feet)</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }
}
