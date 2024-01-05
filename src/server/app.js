const express = require("express");
const router = require("../routes");

const app = express();

app.use(router);

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ status: "OK" });
});

module.exports = app;
