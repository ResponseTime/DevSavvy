require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri);
client.connect((err) => {
  if (err) throw err;
});
const db = client.db("techblog");

module.exports = db;
