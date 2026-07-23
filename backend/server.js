const express = require("express");
const cors = require("cors");
require("dotenv").config();

const petersonRoutes = require("./routes/petersonRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Peterson Solution Backend Running 🚀",
  });
});

app.use("/api/peterson", petersonRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;