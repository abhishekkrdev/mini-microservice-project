const express = require("express");
const bodyParser = require("body-parser");
const Axios = require("axios");
const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  Axios.post(`http://posts-clusterip-srv:4000/events`, event);
  Axios.post(`http://comments-srv:4001/events`, event);
  Axios.post(`http://query-srv:4002/events`, event);
  Axios.post(`http://moderation-srv:4003/events`, event);

  res.send({ status: "OK" });
});

app.get("/events", () => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
