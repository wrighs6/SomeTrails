const fs = require("fs");

const Trail = require("./Trail.js");
const TrailProvider = require("./TrailProvider.js");

class TrailJSON extends TrailProvider {
  // TrailJSON is an implementation of TrailProvider that stores
  // an array of Trails retrieved from a JSON file

  #data;

  constructor(source) {
    super(source);
    this.#data = JSON.parse(fs.readFileSync(source, "utf8")).map((d, i) => new Trail({...d, id: i}));
  }

  // keywordSearch is a private method which takes the internal array of Trails
  // and adds a field to each Trail storing the number of times any of the provided
  // keywords were found in the Trail's name, description, or location
  #keywordSearch(keywords) {
    return this.#data
    .map(trail => {
      let occurrences = 0;
      const fields = [trail.name, trail.description, trail.location];

      fields.forEach(field => {
        keywords.forEach(keyword => {
          const regex = new RegExp(keyword, "gi");
          occurrences += (field.match(regex) || []).length;
        });
      });

      return { ...trail, occurrences };
    })
  }

  // search is the public method used to retrieve an array of Trails
  // The method takes a single Object as it's paramater, which may include a "keywords" field
  // If this field does exist, keywordSearch is used to return an array of the Trails containing
  // at least one keyword, sorted by number of occurrences
  // If not, the entire array of Trails is returned
  search({ keywords }) {
    if (keywords != undefined)
      return this.#keywordSearch(keywords)
        .filter(obj => obj.occurrences > 0)
        .sort((a, b) => b.occurrences - a.occurrences)
        .map(({occurrences, ...trail}) => trail);
    else
      return this.#data;
  }

  // find is used to retrieve a single Trail by specifying its unique ID
  find(id) {
    return this.#data.find(t => t.id == id);
  }
}

module.exports = TrailJSON;
