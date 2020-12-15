const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const axios = require("axios");
const { check, validationResult } = require("express-validator");

const Rating = require("../../models/Rating");

// Route: GET api/ratings
// Description: Get movie ratings from database
// Access: Private
router.get("/", auth, async (req, res) => {
  try {
    const rating = await Rating.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(rating);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: GET api/ratings/:id
// Description: Get a single movie rating from database
// Access: Private
router.get("/:id", auth, async (req, res) => {
  try {
    const rating = await Rating.find({ movieId: req.params.id }).sort({
      date: -1,
    });
    res.json(rating);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: POST api/ratings
// Description: Post movie rating in database
// Access: Private
router.post("/", auth, async (req, res) => {
  try {
    const { movieId, movieTitle, likes, unlikes } = req.body;

    const newRating = new Rating({
      movieId,
      movieTitle,
      likes,
      unlikes,
    });

    const rating = await newRating.save();

    res.json(rating);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

// Route: PUT api/ratings/like/:id
// Description: Like a movie
// Access: Private
router.put("/like/:id", auth, async (req, res) => {
  try {
    const rating = await Rating.findOne({
      movieId: req.params.id,
    });

    const removeIndex = rating.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    // Check to see if the movie has already been liked
    if (
      rating.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0 ||
      rating.unlikes.filter(
        (unlike) => unlike.user.toString() === req.user.id
      ) > 0
    ) {
      rating.likes.splice(removeIndex, 1);
    } else {
      rating.likes.unshift({ user: req.user.id });
    }

    await rating.save();

    res.json(rating);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: PUT api/ratings/unlike/:id
// Description: Unlike a movie
// Access: Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const rating = await Rating.findOne({ movieId: req.params.id });

    const removeIndex = rating.unlikes
      .map((unlike) => unlike.user.toString())
      .indexOf(req.user.id);

    // Check to see if the movie has already been unliked
    if (
      rating.unlikes.filter((like) => like.user.toString() === req.user.id)
        .length > 0 ||
      rating.likes.filter((unlike) => unlike.user.toString() === req.user.id) >
        0
    ) {
      rating.unlikes.splice(removeIndex, 1);
    } else {
      rating.unlikes.unshift({ user: req.user.id });
    }

    await rating.save();

    res.json(rating);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
