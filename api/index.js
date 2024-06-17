const data = require("./data.json");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(80, () => {
  console.log("listening on port 80");
});
