const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const axios = require("axios");
const { check, validationResult } = require("express-validator");

const Watchlist = require("../../models/Watchlist");

// Route: GET api/movies
// Description: Get movie watchlist from database
// Access: Private
router.get("/", auth, async (req, res) => {
  try {
    const watchlist = await Watchlist.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(watchlist);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: POST api/movies
// Description: Post a movie entry to the watchlist
// Access: Private
router.post(
  "/",
  [auth, check("movieTitle", "Movie title is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { movieId, movieTitle, movieImage } = req.body;

    try {
      const newMovie = new Watchlist({
        user: req.user.id,
        movieId,
        movieTitle,
        movieImage,
      });

      const movie = await newMovie.save();

      res.json(movie);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// Route: DELETE api/movies/:id
// Description: Delete a movie from the watchlist
// Access: Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let movie = await Watchlist.findById(req.params.id);

    if (!movie) return res.status(404).json({ msg: "Movie not found" });

    // Validation to check if movie in watchlist belongs to user
    if (movie.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Watchlist.findByIdAndRemove(req.params.id);

    res.json({ msg: "Movie removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
