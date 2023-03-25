const express = require("express");
const app = express();
const score = require("./modules/score");
const time = require("./modules/time");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 5000);

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/score", function (req, res) {
  res.send(score.getScore());
});

app.post("/score", function (req, res) {
  score.updateScore(req.body);
  console.log("this is req.body", req.body);
  res.sendStatus(200);
});
app.get("/time", function (req, res) {
  res.send(time.getTime());
});
app.post("/time", function (req, res) {
  time.remainingTime(req.body);
  console.log("this is req.body", req.body);
  res.sendStatus(200);
});

app.listen(app.get("port"), function () {
  console.log("Server up and running on Port", 5000);
});
