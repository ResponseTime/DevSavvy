require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri);
const conn_ = await client.connect();
const db = conn_.db("techlogin");

module.exports = db;
