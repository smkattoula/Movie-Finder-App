const express = require("express");
const router = express.Router();
const axios = require("axios");
const { check, validationResult } = require("express-validator");

const Movie = require("../../models/Movie");

// Route: POST api/movies
// Description: Post a movie entry in the database
// Access: Public
router.post(
  "/",
  [check("movie_title", "Movie title is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { movieId, movieTitle, movieImage } = req.body;

    try {
      const newMovie = new Movie({
        user: req.user._id,
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

// Route: PUT api/movies/:id
// Description: Thumbs up or thumbs down a movie
// Access: Public
router.put("/:id", async (req, res) => {
  const { movie_title, thumbs_up, thumbs_down } = req.body;

  // Build movie object
  const movieFields = {};
  if (movie_title) movieFields.movie_title = movie_title;
  if (thumbs_up) movieFields.thumbs_up = thumbs_up;
  if (thumbs_down) movieFields.thumbs_down = thumbs_down;

  try {
    let movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).json({ msg: "Movie entry not found" });

    movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: movieFields },
      { new: true }
    );

    res.json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
