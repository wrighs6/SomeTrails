const express = require("express");

const TrailJSON = require("./TrailJSON.js");

const app = express();

const provider = new TrailJSON("./data.json");

app.get("/", (req, res) => {
  if (req.query.text != undefined) {
    res.json(provider.search({ keywords: req.query.text.split(/\s\s*/) }));
  } else {
    res.json(provider.search({}));
  }
});

app.get("/:id", (req, res) => {
  res.json(provider.find(req.params.id));
});

app.listen(80, () => {
  console.log("listening on port 80");
});
