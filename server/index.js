const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Backend Working" });
});

// ✅ ADD THIS PART (VERY IMPORTANT)
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

module.exports = app;