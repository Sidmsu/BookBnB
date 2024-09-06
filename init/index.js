const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");

        // Initialize the database after a successful connection
        await initDB();
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); // Exit process if DB connection fails
    }
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data);
        console.log("Data was initialized");
    } catch (err) {
        console.error("Error initializing data", err);
    }
};

// Call the main function and handle any errors
main().catch((err) => {
    console.log(err);
});

//init/index.js//