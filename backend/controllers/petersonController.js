const simulatePeterson = require("../utils/petersonAlgorithm");

const runPeterson = (req, res) => {
  const { process } = req.body;

  if (process !== 0 && process !== 1) {
    return res.status(400).json({
      success: false,
      message: "Process must be 0 or 1",
    });
  }

  const result = simulatePeterson(process);

  res.json({
    success: true,
    data: result,
  });
};

module.exports = {
  runPeterson,
};