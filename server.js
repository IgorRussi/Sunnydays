const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API Runing"));

const PORT = process.env.POR || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
