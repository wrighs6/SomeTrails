import { Component } from 'preact';
import { html } from 'htm/preact';

export default class SearchResults extends Component {
  render() {
    let results = [`Result for "${this.props.query}"`];

    // Add sub-results for specific queries
    if (this.props.query.toLowerCase() === "trail") {
      results.push(
        { 
          title: "Trail1", 
          description: "This is a description for Trail1.", 
          imageUrl: "https://th.bing.com/th/id/OIP.OnDSYYB09LMRdQfG3GtkgAHaGB?rs=1&pid=ImgDetMain",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail2", 
          description: "This is a description for Trail2.", 
          imageUrl: "https://th.bing.com/th/id/OIP.OnDSYYB09LMRdQfG3GtkgAHaGB?rs=1&pid=ImgDetMain",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail3", 
          description: "This is a description for Trail3.", 
          imageUrl: "https://th.bing.com/th/id/OIP.OnDSYYB09LMRdQfG3GtkgAHaGB?rs=1&pid=ImgDetMain",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail4", 
          description: "This is a description for Trail4.", 
          imageUrl: "https://th.bing.com/th/id/OIP.OnDSYYB09LMRdQfG3GtkgAHaGB?rs=1&pid=ImgDetMain",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail5", 
          description: "This is a description for Trail5.", 
          imageUrl: "https://th.bing.com/th/id/OIP.OnDSYYB09LMRdQfG3GtkgAHaGB?rs=1&pid=ImgDetMain",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        }
      );
    }

    return html`
      <div class="search-result">
        <div class="main-result">${results[0]}</div>
        ${results.slice(1).map(result => html`
          <div class="result-item" onClick=${() => this.props.select(result.title)}>
            <div class="result-content">
              <div class="result-title">${result.title}</div>
              <div class="result-description">${result.description}</div>
              <div class="result-part">${result.location}</div>
              <div class="result-part">${result.difficulty}</div>
              <div class="result-part">${result.distance}</div>
              <div class="result-part">${result.elevationGain}</div>
              <div class="result-part">${result.time}</div>
            </div>
            <img class="result-image" src=${result.imageUrl} alt=${result.title} />
          </div>
        `)}
      </div>
    `;
  }
}
