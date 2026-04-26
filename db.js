const mongoose = require("mongoose");

// Define mongoDb connection URL
const mongooseUrl = "mongodb://127.0.0.1:27017/hotels";

// Setup mongoDB connection
mongoose.connect(mongooseUrl)

// Get the default connection
// Mongoose maintains a default connection onbject representing the MongoDB connection. We can use this default connection.
const db = mongoose.connection;

// Define event listeners for database connection.

db.on("connected", () => {
        console.log("MongoDB connection established successfully...");
});

db.on("error", (err) => {
        console.log("MongoDB connection error: " + err);
});     

db.on("disconnected", () => {
        console.log("MongoDB connection disconnected...");
});


// Export the database connection object for use in other modules
module.exports = db;










// Shorter version of above code
// const mongoose = require("mongoose");

// const mongooseUrl = "mongodb://127.0.0.1:27017/hotels";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongooseUrl);
//     console.log("MongoDB connected successfully...");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;