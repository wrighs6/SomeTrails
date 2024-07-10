const TrailJSON = require("./TrailJSON.js");

const provider = new TrailJSON("./data.json");

console.log(provider.search({}));
