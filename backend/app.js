require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./server.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const data = await db.collection("techlogin").find({});
  let ares = [];
  for await (let key of data) {
    ares.push(key);
  }
  res.json(ares);
});
app.listen(process.env.PORT, () => {
  console.log("running");
});
