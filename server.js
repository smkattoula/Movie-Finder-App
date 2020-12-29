const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Express Middleware
app.use(express.json({ extended: false }));

// Define Route
app.use("/api/movies", require("./routes/api/movies"));
app.use("/api/ratings", require("./routes/api/ratings"));
app.use("/api/users", require("./routes/api/users"));

// Serve static assests in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
