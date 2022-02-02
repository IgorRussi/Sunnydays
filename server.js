const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Runing"));

// Define Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/city", require("./routes/api/city"));
app.use("/api/weather", require("./routes/api/weather"));

const PORT = process.env.POR || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
