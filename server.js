const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // keep this if your api accepts cross-origin requests
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
  );
  next();
});

// Connect Database
connectDB();

// Express Middleware
app.use(express.json({ extended: false }));

// Define Route
app.use("/api/movies", require("./routes/api/movies"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
