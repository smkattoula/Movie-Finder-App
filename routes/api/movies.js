const express = require("express");
const router = express.Router();
const axios = require("axios");

const Movie = require("../../models/Movie");

// Route: PUT api/movies/like/:id
// Description: Thumbs up a movie
// Access: Public
router.post("/like/:id", async (req, res) => {
  const { movie_title, thumbs_up, thumbs_down } = req.body;

  const collection = await axios.get(
    `https://api.themoviedb.org/3/collection/${req.params.id}?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US`
  );

  movie_title = collection.original_title;

  try {
    // if (movie) {
    //   // Update
    //   movie = await Movie.findByIdAndUpdate(
    //     { $set: movieFields },
    //     { new: true }
    //   );

    //   return res.json(movie);
    // }

    // Create
    const newMovie = new Movie({
      movie_title: movie_title,
      thumbs_up: thumbs_up,
      thumbs_down: thumbs_down,
    });

    const movie = await newMovie.save();
    res.json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
