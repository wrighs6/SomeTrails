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
    filters: {
      difficulty: '',
      distance: '',
      elevationGain: '',
      maximumElevation: '',
      time: '',
    },
    sortOrder: '', // Add sortOrder state
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        filters: {
          difficulty: '',
          distance: '',
          elevationGain: '',
          maximumElevation: '',
          time: '',
        },
        sortOrder: '', // Reset sortOrder when query changes
      });
      const qs = this.state.query == "" ? "" : `?${new URLSearchParams({ text: this.state.query })}`;
      fetch(`https://api.${window.location.host}/${qs}`)
        .then(response => response.json())
        .then(data => this.setState({ trails: data }))
        .catch(error => console.error('Error fetching data:', error));
    }
  }

  select = (id) => this.setState({ selected: id });

  search = (q) => {
    this.setState({ query: q });
  };

  applyFilters = (filters) => this.setState({ filters });

  applySortOrder = (sortOrder) => this.setState({ sortOrder });

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
      const matchesmaximumElevation = filters.maximumElevation ? (
        (filters.maximumElevation === 'low' && trail.maximumElevation < 100) ||
        (filters.maximumElevation === 'medium' && trail.maximumElevation >= 100 && trail.maximumElevation <= 450) ||
        (filters.maximumElevation === 'high' && trail.maximumElevation > 450)
      ) : true;
      const matchestime = filters.time ? (
        (filters.time === 'short' && trail.time < 20) ||
        (filters.time === 'medium' && trail.time >= 20 && trail.time <= 60) ||
        (filters.time === 'long' && trail.time > 60)
      ) : true;
      return matchesDifficulty && matchesDistance && matchesElevationGain && matchesmaximumElevation && matchestime;
    });
  };

  sortTrails = (trails, sortOrder) => {
    switch(sortOrder) {
      case 'distance-asc':
        return trails.sort((a, b) => a.distance - b.distance);
      case 'distance-desc':
        return trails.sort((a, b) => b.distance - a.distance);
      case 'elevationGain-asc':
        return trails.sort((a, b) => a.elevationGain - b.elevationGain);
      case 'elevationGain-desc':
        return trails.sort((a, b) => b.elevationGain - a.elevationGain);
      case 'maximumElevation-asc':
        return trails.sort((a, b) => a.maximumElevation - b.maximumElevation);
      case 'maximumElevation-desc':
        return trails.sort((a, b) => b.maximumElevation - a.maximumElevation);
      case 'time-asc':
        return trails.sort((a, b) => a.time - b.time);
      case 'time-desc':
        return trails.sort((a, b) => b.time - a.time);
      default:
        return trails;
    }
  };

  render() {
    const { trails, selected, query, filters, sortOrder } = this.state;
    const filteredTrails = this.filterTrails(trails, filters);
    const sortedTrails = this.sortTrails(filteredTrails, sortOrder);
    const resultsText = `${sortedTrails.length > 0 ? sortedTrails.length : 'No'} Result${sortedTrails.length !== 1 ? 's' : ''} for "${query}"`;

    if (selected === undefined) {
      return html`
        <${Home} search=${this.search} />
        ${query !== undefined && html`
          <div class="main-container">
            <div class="results-section">
              <div class="main-result">${resultsText}</div>
              <div class="filters-and-results">
                <div class="filters-container">
                  <${Filters} filters=${filters} sortOrder=${sortOrder} onFilterChange=${this.applyFilters} onSortChange=${this.applySortOrder} />
                </div>
                <div class="results-container">
                  <${SearchResults} results=${sortedTrails} query=${query} select=${this.select} />
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
