const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://zeon_o1:}$61mD5cda@nexuswiki.acmg31l.mongodb.net/?appName=NexusWiki";

const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("IPStack");
    console.log("Conected to MongoDB");
  }
  return db;
}

module.exports = connectDB;
