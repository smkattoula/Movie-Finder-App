import React, { useContext } from "react";
import { Button, Alert } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const ThumbsUpDownBtn = (props) => {
  const movieContext = useContext(MovieContext);
  const { addLike, removeLike, postRating, ratings } = movieContext;

  const rating = {
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
  };

  const onClickAddLike = () => {
    if (props.isAuthenticated === false) {
      props.setAlertRating(
        <Alert color="danger">Please sign in to rate movie</Alert>
      );
      setTimeout(() => {
        props.setAlertRating();
      }, 5000);
    }

    // eslint-disable-next-line
    if (ratings.length == 0) {
      postRating(rating);
      addLike(props.movieId);
    } else {
      addLike(props.movieId);
    }
  };

  const onClickRemoveLike = () => {
    if (props.isAuthenticated === false) {
      props.setAlertRating(
        <Alert color="danger">Please sign in to rate movie</Alert>
      );
      setTimeout(() => {
        props.setAlertRating();
      }, 5000);
    }

    // eslint-disable-next-line
    if (ratings.length == 0) {
      postRating(rating);
      removeLike(props.movieId);
    } else {
      removeLike(props.movieId);
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
      <Button onClick={onClickAddLike} className="mt-3">
        <i className="fa fa-thumbs-up" style={{ color: "#90ee90" }}></i> {likes}
      </Button>{" "}
      <Button onClick={onClickRemoveLike} className="mt-3">
        <i className="fa fa-thumbs-down" style={{ color: "#ff7f7f" }}></i>{" "}
        {unlikes}
      </Button>
    </>
  );
};

export default ThumbsUpDownBtn;
