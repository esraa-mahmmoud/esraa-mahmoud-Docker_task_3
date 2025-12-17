const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

mongoose
  .connect("mongodb://mongo-db:27017/crud_db")
  .then(() => {
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo error:", err);
  });
