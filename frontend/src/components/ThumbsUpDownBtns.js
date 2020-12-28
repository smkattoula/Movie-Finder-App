import React, { useContext } from "react";
import { Alert } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const ThumbsUpDownBtn = ({
  isAuthenticated,
  setAlertRating,
  movieId,
  movieInfo,
  ratings,
  loading,
}) => {
  const movieContext = useContext(MovieContext);
  const { addLike, removeLike, postRating } = movieContext;

  const rating = {
    movieId: movieId,
    movieTitle: movieInfo.original_title,
  };

  const likes = ratings
    .map((rating) => rating.likes)
    .map((user) => user.length);

  const unlikes = ratings
    .map((rating) => rating.unlikes)
    .map((user) => user.length);

  const timeOut = () => {
    setTimeout(() => {
      setAlertRating();
    }, 5000);
  };

  const onClickLike = () => {
    if (isAuthenticated === false) {
      setAlertRating(
        <Alert color="danger">Please sign in to rate movie</Alert>
      );
      timeOut();
    }

    if (ratings.length === 0 && loading === false) {
      postRating(rating);
      addLike(movieId);
    } else {
      addLike(movieId);
    }
  };

  const onClickUnLike = () => {
    if (isAuthenticated === false) {
      setAlertRating(
        <Alert color="danger">Please sign in to rate movie</Alert>
      );
      timeOut();
    }

    if (ratings.length === 0 && loading === false) {
      postRating(rating);
      removeLike(movieId);
    } else {
      removeLike(movieId);
    }
  };

  return (
    <>
      <button onClick={onClickLike} className="btn btn-like">
        <i className="fa fa-thumbs-up"></i> {likes}
      </button>
      <button onClick={onClickUnLike} className="btn btn-unlike" color="danger">
        <i className="fa fa-thumbs-down"></i> {unlikes}
      </button>
    </>
  );
};

export default ThumbsUpDownBtn;
