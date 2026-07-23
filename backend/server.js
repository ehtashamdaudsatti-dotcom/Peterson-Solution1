const express = require("express");
const cors = require("cors");

const petersonRoutes = require("./routes/petersonRoutes");

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

// Peterson Routes (POST /api/peterson)
app.use("/api/peterson", petersonRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

module.exports = app;