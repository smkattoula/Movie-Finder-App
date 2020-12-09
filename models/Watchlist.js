const mongoose = require("mongoose");

const WatchlistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  movieTitle: {
    type: String,
  },
  movieId: {
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("watchlist", WatchlistSchema);
