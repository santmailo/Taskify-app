require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (err) {
    console.log("some error", err);
  }
};

module.exports = connectToMongoDB;
