const fs = require("fs");

const Trail = require("./Trail.js");
const TrailProvider = require("./TrailProvider.js");

class TrailJSON extends TrailProvider {
  #data;

  constructor(source) {
    super(source);
    this.#data = JSON.parse(fs.readFileSync(source, "utf8")).map(d => new Trail(d));
  }

  search({}) {
    return this.#data;
  }
}

module.exports = TrailJSON;
