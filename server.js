const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Runing"));

const PORT = process.env.POR || 5000;

// Commit Teste

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
