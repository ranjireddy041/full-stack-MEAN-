const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// Use Docker environment variable
db.url = process.env.MONGO_URI || "mongodb://mongodb:27017/dd_db";

module.exports = db;
