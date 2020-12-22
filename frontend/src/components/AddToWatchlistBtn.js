import React, { useContext } from "react";
import { Button, Alert } from "reactstrap";
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
    if (props.isAuthenticated === true) {
      addToWatchlist(watchlist);
      props.setAlertWatchlist(
        <Alert color="success">Movie added to watchlist!</Alert>
      );
      setTimeout(() => {
        props.setAlertWatchlist();
      }, 5000);
    } else {
      props.setAlertWatchlist(
        <Alert color="danger">Please sign in to add movie to watchlist</Alert>
      );
      setTimeout(() => {
        props.setAlertWatchlist();
      }, 5000);
    }
  };

  return (
    <Button onClick={onClick} className="mt-3" color="info" block>
      Add To Watchlist
    </Button>
  );
};

export default AddToWatchlistBtn;
