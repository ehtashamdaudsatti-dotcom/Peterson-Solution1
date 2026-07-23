const express = require("express");

const router = express.Router();

const {
  runPeterson,
} = require("../controllers/petersonController");

router.post("/", runPeterson);

module.exports = router;