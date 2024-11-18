const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Rutes = require("./route");
const app = express();
const port = 8000;
const path = require("path");

// middlewire
app.use(cors());
app.use(
  cors({
    origin: "https://panel-superfood.vercel.app", // Your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/api/v1", Rutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
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
