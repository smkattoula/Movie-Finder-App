const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  movie_title: {
    type: String,
    required: true,
  },
  thumbs_up: {
    type: Number,
  },
  thumbs_down: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
