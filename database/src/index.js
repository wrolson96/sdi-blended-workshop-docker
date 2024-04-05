const express = require("express");
const app = express();
const port = 3030;
const knex = require("knex")(require("../knexfile.js")["development"]);

app.use(express.json());

app.get("/authors", (req, res) => {
  knex("authors")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.listen(port, () => {
  console.log("app is up and running");
});
