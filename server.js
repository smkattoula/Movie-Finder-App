const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Express Middleware
app.use(express.json({ extended: false }));

// Define Route
app.use("/api/movies", require("./routes/api/movies"));
app.use("/api/ratings", require("./routes/api/ratings"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
