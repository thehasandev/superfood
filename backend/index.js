const express = require("express");
const mongoose = require("mongoose");
const Rutes = require("./route");
const app = express();
const port = 8000;
const path = require("path");

// middlewire
app.use(express.json());
app.use("/api/v1", Rutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Database
mongoose
  .connect(
    "mongodb+srv://food:VcWbLeAj6vLAZ6Fs@cluster0.px58yxr.mongodb.net/superFood?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() =>
    app.listen(port, () => {
      console.log(`Database is conneted ${port}`);
    })
  );
