const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps app is running");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
