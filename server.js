// server.js
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files from dist
app.use(express.static(path.join(__dirname, "dist")));

// For React Router (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
