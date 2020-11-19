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
});

module.exports = mongoose.model("movie", MovieSchema);
