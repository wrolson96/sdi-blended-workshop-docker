const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.listen(port, () =>
  console.log(`My API is up and running Yo! port: ${port}`)
);

app.get("/", (req, res) => {
  res.status(200).send("Hello User!");
});

app.get("/authors", (req, res) => {
  console.log("hello");
  fetch("http://localhost:5431/authors")
    .then((data) => data.json())
    .then((data) => res.status(200).send(data));
});
