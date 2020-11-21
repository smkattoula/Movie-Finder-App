const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  movie_title: {
    type: String,
  },
  thumbs_up: {
    type: Number,
    required: true,
  },
  thumbs_down: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
