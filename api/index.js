const express = require("express");
const TrailJSON = require("./TrailJSON.js");

// Initialize the Express app
const app = express();

// Create a TrailProvider sourcing trails from data.json
const provider = new TrailJSON("./data.json");

// Sending a GET request to api.<hostname>/ performs a search on the TrailProvider
// An optional "text" field can be added to the query string to search for included keywords
// For example, api.<hostname>/?text=trail will search for trails containing the word "trail"
app.get("/", (req, res) => {
  if (req.query.text != undefined) {
    res.json(provider.search({ keywords: req.query.text.split(/\s\s*/) }));
  } else {
    res.json(provider.search({}));
  }
});

// Sending a GET request to api.<hostname>/:id will retrieve the trail with the provided id
// If no trail has the given id, a 404 error will be returned
app.get("/:id", (req, res) => {
  res.json(provider.find(req.params.id));
});

// Run the API on port 80
// When running with Docker Compose, Caddy acts as a reverse proxy to provide access at api.<hostname>/
app.listen(80, () => {
  console.log("listening on port 80");
});
