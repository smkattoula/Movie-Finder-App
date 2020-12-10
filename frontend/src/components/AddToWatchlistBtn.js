import React, { useContext } from "react";
import { Button } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const AddToWatchlistBtn = (props) => {
  const movieContext = useContext(MovieContext);
  const { addToWatchlist } = movieContext;

  const watchlist = {
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.poster_path,
  };

  const onClick = () => {
    addToWatchlist(watchlist);
    alert("Movie Added to Watchlist!");
  };

  return (
    <Button onClick={onClick} className="mt-3" color="info" block>
      Add To Watchlist
    </Button>
  );
};

export default AddToWatchlistBtn;
