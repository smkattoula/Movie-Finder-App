const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  movieId: {
    type: String,
  },
  movieTitle: {
    type: String,
  },
  movieImage: {
    type: String,
  },
  likes: {
    type: Boolean,
  },
  dislikes: {
    type: Boolean,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
