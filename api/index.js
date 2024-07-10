const express = require("express");

const TrailJSON = require("./TrailJSON.js");

const app = express();

const provider = new TrailJSON("./data.json");

app.get("/", (req, res) => {
  res.json(provider.search({}));
});

app.listen(80, () => {
  console.log("listening on port 80");
});
