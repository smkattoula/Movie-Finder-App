import React, { useContext } from "react";
import { Button } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const ThumbsUpDownBtn = (props) => {
  const movieContext = useContext(MovieContext);
  const { addLike, removeLike, postRating, ratings } = movieContext;

  const rating = {
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
  };

  const onClickAddLike = () => {
    postRating(rating);
    // if (ratings === null) {
    //   postRating(rating);
    //   addLike();
    //   console.log(ratings);
    // } else {
    //   addLike(rating);
    //   console.log(ratings);
    // }
  };

  const onClickRemoveLike = () => {
    addLike(rating._id);
    console.log(ratings);
  };

  return (
    <>
      <Button onClick={onClickAddLike} className="mt-3">
        <i className="fa fa-thumbs-up"></i>
      </Button>{" "}
      <Button onClick={onClickRemoveLike} className="mt-3">
        <i className="fa fa-thumbs-down"></i>
      </Button>
    </>
  );
};

export default ThumbsUpDownBtn;
