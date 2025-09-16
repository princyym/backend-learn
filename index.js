require("dotenv").config();
const express = require("express");
//common js not module js
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/login", (req, res) => {
  res.send("<h1> please login at my web</h1>");
});
//callback fn req and res are express mainly
app.get("/twitter", (req, res) => {
  res.send("url of my twitter");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> chai or code </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(` the server is running on ${port} `);
});
