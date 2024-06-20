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
          imageUrl: "https://www.troyny.gov/ImageRepository/Document?documentId=982",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail2", 
          description: "This is a description for Trail2.", 
          imageUrl: "https://3.bp.blogspot.com/-oMGjzcgUMiU/WBZmaG9olhI/AAAAAAAAXUY/BWF67FmpU8wPDEeLMcvWrSSlemZ8maAkACLcB/s1600/IMG_2751.JPG",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail3", 
          description: "This is a description for Trail3.", 
          imageUrl: "https://i0.wp.com/decideyouradventure.com/wp-content/uploads/2018/09/albany-pine-bush-1.jpg?w=900&ssl=1",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail4", 
          description: "This is a description for Trail4.", 
          imageUrl: "https://cdn.prod.website-files.com/609d2f26d188080a94ab7bcc/61d3697852fcbf35a17bff99_Rail%20Trail-p-1600.jpeg",
          location: "USE API FOR THIS",
          difficulty: 0,
          distance: 1.0,
          elevationGain: 100,
          time: 60,
        },
        { 
          title: "Trail5", 
          description: "This is a description for Trail5.", 
          imageUrl: "https://uncoveringnewyork.com/wp-content/uploads/2021/11/Minelot-Falls-Thacher-State-Park-0066.jpg",
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
              <div class="result-location">${result.location}</div>
              <div class="result-difficulty">${result.difficulty}</div>
              <div class="result-distance">${result.distance}</div>
              <div class="result-elevationGain">${result.elevationGain}</div>
              <div class="result-time">${result.time}</div>
            </div>
            <img class="result-image" src=${result.imageUrl} alt=${result.title} />
          </div>
        `)}
      </div>
    `;
  }
}
