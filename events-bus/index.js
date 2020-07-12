const express = require("express");
const bodyParser = require("body-parser");
const Axios = require("axios");
const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  Axios.post(`http://localhost:4000/events`, event);
  Axios.post(`http://localhost:4001/events`, event);
  Axios.post(`http://localhost:4002/events`, event);
  Axios.post(`http://localhost:4003/events`, event);

  res.send({ status: "OK" });
});

app.get("/events", () => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
