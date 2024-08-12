import { Component } from 'preact';
import { html } from 'htm/preact';

// Filters lets the user view and control the trail sorting and filtering
// This is done by using managed inputs which display the current state and respond to input by updating the state appropriately

export default class Filters extends Component {
  state = {
    showNotification: false
  };

  handleFilterChange = (event) => {
    this.setState({ showNotification: true });
    const { name, value } = event.target;
    this.props.onFilterChange({ ...this.props.filters, [name]: value });
    this.hideNotification();
  };

  handleSortChange = (event) => {
    this.setState({ showNotification: true });
    const { value } = event.target;
    this.props.onSortChange(value);
    this.hideNotification();
  };

  handleClear = () => {
    this.setState({ showNotification: true });
    this.props.onFilterChange({
      difficulty: '',
      distance: '',
      elevationGain: '',
      maximumElevation: '',
      time: '',
      tagsSelected: [],
      tagsExcluded: []
    });
    this.props.onSortChange('');
    this.hideNotification();
  };

  hideNotification = () => {
    setTimeout(() => {
      this.setState({ showNotification: false });
    }, 2000);
  };

  render() {
    const { showNotification } = this.state;
    const { difficulty, distance, elevationGain, maximumElevation, time, tagsSelected, tagsExcluded } = this.props.filters;
    const sortOrder = this.props.sortOrder;
    const tags = this.props.tags;
    return html`
      <div class="filters-container">
        ${showNotification && html`
          <div class="notification">
            Filter applied!
          </div>
        `}
        <header class="clear-header">
          <button id="clear-filters-button" onClick=${this.handleClear}>Clear</button>
        </header>
        <div class="filters">
          <div class="dropdown">
            <label for="sortOrder">Sort by</label>
            <select value=${sortOrder} id="sortOrder" name="sortOrder" onInput=${this.handleSortChange}>
              <option value="">Select Order</option>
              <option value="distance-asc">Distance (Ascending)</option>
              <option value="distance-desc">Distance (Descending)</option>
              <option value="elevationGain-asc">Elevation Gain (Ascending)</option>
              <option value="elevationGain-desc">Elevation Gain (Descending)</option>
              <option value="maximumElevation-asc">Max Elevation (Ascending)</option>
              <option value="maximumElevation-desc">Max Elevation (Descending)</option>
              <option value="time-asc">Estimated Time (Ascending)</option>
              <option value="time-desc">Estimated Time (Descending)</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="difficulty">Difficulty</label>
            <select value=${difficulty} id="difficulty" name="difficulty" onInput=${this.handleFilterChange}>
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="distance">Distance</label>
            <select value=${distance} id="distance" name="distance" onInput=${this.handleFilterChange}>
              <option value="">Select Distance</option>
              <option value="short">Short (0-5 miles)</option>
              <option value="medium">Medium (5-10 miles)</option>
              <option value="long">Long (10+ miles)</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="elevationGain">Elevation Gain</label>
            <select value=${elevationGain} id="elevationGain" name="elevationGain" onInput=${this.handleFilterChange}>
              <option value="">Select Elevation Gain</option>
              <option value="low">Low (0-500 feet)</option>
              <option value="medium">Medium (500-2000 feet)</option>
              <option value="high">High (2000+ feet)</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="maximumElevation">Max Elevation</label>
            <select value=${maximumElevation} id="maximumElevation" name="maximumElevation" onInput=${this.handleFilterChange}>
              <option value="">Select Max Elevation</option>
              <option value="low">Low (0-100 feet)</option>
              <option value="medium">Medium (100-450 feet)</option>
              <option value="high">High (450+ feet)</option>
            </select>
          </div>
          <div class="dropdown">
            <label for="time">Estimated Time</label>
            <select value=${time} id="time" name="time" onInput=${this.handleFilterChange}>
              <option value="">Select Estimated Time</option>
              <option value="short">0-20 minutes</option>
              <option value="medium">20-60 minutes</option>
              <option value="long">60+ minutes</option>
            </select>
          </div>
          ${tags.map(tag => {
            return html`<div>
              <input
                type="checkbox"
                checked=${tagsSelected.includes(tag)}
                indeterminate=${tagsExcluded.includes(tag)}
                onInput=${e => {
                  e.preventDefault();
                  if (tagsSelected.includes(tag)) {
                    tagsSelected.splice(tagsSelected.indexOf(tag), 1);
                    tagsExcluded.push(tag);
                  } else if (tagsExcluded.includes(tag)) {
                    tagsExcluded.splice(tagsExcluded.indexOf(tag), 1);
                  } else {
                    tagsSelected.push(tag);
                  }
                  this.props.onFilterChange({ ...this.props.filters, tagsSelected, tagsExcluded });
                }}
              />
              <label>${tag}</label>
            </div>`
          })}
        </div>
      </div>
    `;
  }
}
