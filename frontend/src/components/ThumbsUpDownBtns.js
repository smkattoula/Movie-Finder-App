import React, { useContext } from "react";
import { Button, Alert } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const ThumbsUpDownBtn = ({
  isAuthenticated,
  setAlertRating,
  movieId,
  movieInfo,
  ratings,
}) => {
  const movieContext = useContext(MovieContext);
  const { addLike, removeLike, postRating, getRating } = movieContext;

  const rating = {
    movieId: movieId,
    movieTitle: movieInfo.original_title,
  };

  const onClickAddLike = () => {
    if (isAuthenticated === false) {
      setAlertRating(
        <Alert color="danger">Please sign in to rate movie</Alert>
      );
      setTimeout(() => {
        setAlertRating();
      }, 5000);
    }

    // eslint-disable-next-line
    if (ratings.length == 0) {
      postRating(rating);
      getRating(movieId);
      addLike(movieId);
    } else {
      addLike(movieId);
    }
  };

  const onClickRemoveLike = () => {
    if (isAuthenticated === false) {
      setAlertRating(
        <Alert color="danger">Please sign in to rate movie</Alert>
      );
      setTimeout(() => {
        setAlertRating();
      }, 5000);
    }

    // eslint-disable-next-line
    if (ratings.length == 0) {
      postRating(rating);
      getRating(movieId);
      removeLike(movieId);
    } else {
      removeLike(movieId);
    }
  };

  const likes = ratings
    .map((rating) => rating.likes)
    .map((user) => user.length);

  const unlikes = ratings
    .map((rating) => rating.unlikes)
    .map((user) => user.length);

  return (
    <>
      <Button onClick={onClickAddLike} className="mt-3" color="success">
        <i className="fa fa-thumbs-up"></i> {likes}
      </Button>{" "}
      <Button onClick={onClickRemoveLike} className="mt-3" color="danger">
        <i className="fa fa-thumbs-down"></i> {unlikes}
      </Button>
    </>
  );
};

export default ThumbsUpDownBtn;
