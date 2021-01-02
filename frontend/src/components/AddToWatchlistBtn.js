import React, { useContext } from "react";
import { Button, Alert } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const AddToWatchlistBtn = ({
  isAuthenticated,
  setAlertWatchlist,
  movieId,
  movieInfo,
}) => {
  const movieContext = useContext(MovieContext);
  const { addMovieToWatchlist } = movieContext;

  const watchlist = {
    movieId: movieId,
    movieTitle: movieInfo.original_title,
    movieImage: movieInfo.poster_path,
  };

  const timeOut = () => {
    setTimeout(() => {
      setAlertWatchlist();
    }, 3000);
  };

  const onClick = () => {
    if (isAuthenticated === true) {
      addMovieToWatchlist(watchlist);
      setAlertWatchlist(
        <Alert color="success">Movie added to watchlist!</Alert>
      );
      timeOut();
      window.scrollTo(0, 0);
    } else {
      setAlertWatchlist(
        <Alert color="danger">Please sign in to add movie to watchlist</Alert>
      );
      timeOut();
      window.scrollTo(0, 0);
    }
  };

  return (
    <Button onClick={onClick} className="mt-3" color="info" block>
      Add To Watchlist
    </Button>
  );
};

export default AddToWatchlistBtn;
