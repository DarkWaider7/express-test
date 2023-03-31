console.log("start");

const express = require("express");

const server = express();

const PORT = 3000;

server.get("/", (req, res) => {
  res.send("Hello Global! --GET");
});

server.get("/users", (req, res) => {
  res.send("Hello Lusers! --GET");
});

server.post("/users", (req, res) => {
  res.send("Hello Users! --POST");
});

server.listen(PORT, () => {
  console.log("listen");
});

console.log("end");
