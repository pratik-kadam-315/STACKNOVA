require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Connect to MongoDB FIRST
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");

    // Start server ONLY after DB connects
    app.listen(PORT, () => {
      console.log(`Pratik is listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log("❌ MongoDB connection error:", err.message);
  });

app.get("/", (req, res) => {
  res.send("Backend is running!");
});
