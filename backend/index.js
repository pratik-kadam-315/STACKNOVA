require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");   // ✅ ADD THIS
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());   // ✅ ALLOWS FRONTEND TO CALL BACKEND

// ---------------- DB CONNECT ----------------
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Pratik is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err.message);
  });

// ---------------- ROUTES ----------------
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error placing order" });
  }
});
  