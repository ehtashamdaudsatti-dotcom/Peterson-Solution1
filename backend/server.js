const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Peterson Backend Running Successfully 🚀"
  });
});

// Test API
app.get("/api/peterson", (req, res) => {
  res.json({
    success: true,
    title: "Peterson Solution",
    message: "Backend is working on Vercel"
  });
});

module.exports = app;