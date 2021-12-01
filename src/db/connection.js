const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, dataObj) => {
  try {
    await client.connect();
    console.log("Connection completed!");
    const db = client.db("newTestDb");
    const collection = db.collection("movies");
    await crudFunc(collection, dataObj);
    client.close();
  } catch (error) {
    console.log(error);
  }
};

// connection(); We don't want to call it, just export it

//This is to export the function
module.exports = connection;
