const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Runing"));

const PORT = process.env.POR || 5000;

<<<<<<< HEAD
// Commit Test
=======
// Commit Teste
>>>>>>> dfa4d4aac049db627983fd13925397c3976635cd

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
