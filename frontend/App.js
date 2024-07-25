import { Component, render } from 'preact';
import { html } from 'htm/preact';
import Home from './Home.js';
import SearchResults from './SearchResults.js';
import TrailDetail from './TrailDetail.js';
import Filters from './filters.js';
import BackToTopButton from './BackToTopButton.js';

class App extends Component {
  state = {
    trails: [],
    selected: undefined,
    filters: {},
    query: '',
    searchTriggered: false,  // New state to track if a search was triggered
    initialLoad: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.searchTriggered) {
      const qs = this.state.query === '' ? '' : `?${new URLSearchParams({ text: this.state.query })}`;
      fetch(`https://api.${window.location.host}/${qs}`)
        .then(response => response.json())
        .then(data => this.setState({ trails: data }))
        .catch(error => console.error('Error fetching data:', error));
    }
  }

  select = (id) => this.setState({ selected: id });
  
  search = (q) => {
    this.setState({ query: q, searchTriggered: true });  // Set searchTriggered to true
  };

  applyFilters = (filters) => this.setState({ filters });

  filterTrails = (trails, filters) => {
    return trails.filter(trail => {
      const matchesDifficulty = filters.difficulty ? (
        (filters.difficulty === 'easy' && (trail.difficulty === 1 || trail.difficulty === 2)) ||
        (filters.difficulty === 'moderate' && (trail.difficulty === 3 || trail.difficulty === 4)) ||
        (filters.difficulty === 'hard' && trail.difficulty === 5)
      ) : true;
      const matchesDistance = filters.distance ? (
        (filters.distance === 'short' && trail.distance < 5) ||
        (filters.distance === 'medium' && trail.distance >= 5 && trail.distance <= 10) ||
        (filters.distance === 'long' && trail.distance > 10)
      ) : true;
      const matchesElevationGain = filters.elevationGain ? (
        (filters.elevationGain === 'low' && trail.elevationGain < 500) ||
        (filters.elevationGain === 'medium' && trail.elevationGain >= 500 && trail.elevationGain <= 2000) ||
        (filters.elevationGain === 'high' && trail.elevationGain > 2000)
      ) : true;
      return matchesDifficulty && matchesDistance && matchesElevationGain;
    });
  };

  render() {
    const { trails, selected, query, filters, searchTriggered } = this.state;
    const filteredTrails = this.filterTrails(trails, filters);
    const resultsText = `${filteredTrails.length > 0 ? filteredTrails.length : 'No'} Result${filteredTrails.length !== 1 ? 's' : ''} for "${query}"`;

    if (selected === undefined) {
      return html`
        <${Home} search=${this.search} />
        ${searchTriggered && html`
          <div class="main-container">
            <div class="results-section">
              <div class="main-result">${resultsText}</div>
              <div class="filters-and-results">
                <div class="filters-container">
                  <${Filters} onFilterChange=${this.applyFilters} />
                </div>
                <div class="results-container">
                  <${SearchResults} results=${filteredTrails} query=${query} select=${this.select} />
                </div>
              </div>
            </div>
          </div>
        `}
        <${BackToTopButton} />
      `;
    } else {
      return html`<${TrailDetail} selected=${selected} back=${() => this.setState({ selected: undefined })} />`;
    }
  }
}

render(html`<${App} />`, document.body);
