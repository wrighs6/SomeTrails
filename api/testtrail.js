const Trail = require("./Trail.js");
const data = require("./data.json");

const t = new Trail(data[0]);

console.log(JSON.stringify(t));
