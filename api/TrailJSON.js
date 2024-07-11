const fs = require("fs");

const Trail = require("./Trail.js");
const TrailProvider = require("./TrailProvider.js");

class TrailJSON extends TrailProvider {
  #data;

  constructor(source) {
    super(source);
    this.#data = JSON.parse(fs.readFileSync(source, "utf8")).map(d => new Trail(d));
  }

  #keywordSearch(keywords) {
    return this.#data
    .map(trail => {
      let occurrences = 0;
      const fields = [trail.name, trail.description, trail.location]; // could add tags etc.

      fields.forEach(field => {
        keywords.forEach(keyword => {
          const regex = new RegExp(keyword, "gi");
          occurrences += (field.match(regex) || []).length;
        });
      });

      return { ...trail, occurrences };
    })
  }

  search({ keywords }) {
    if (keywords != undefined)
      return this.#keywordSearch(keywords)
    .filter(obj => obj.occurrences > 0)
    .sort((a, b) => b.occurrences - a.occurrences)
    .map(({occurrences, ...trail}) => trail);
    else
      return this.#data;
  }
}

module.exports = TrailJSON;
