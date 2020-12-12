import React, { useContext } from "react";
import { Button } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const ThumbsUpDownBtn = (props) => {
  const movieContext = useContext(MovieContext);
  const { addLike, removeLike } = movieContext;

  const watchlist = {
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.poster_path,
  };

  const onClickAddLike = () => {
    addLike(watchlist._id);
    console.log(watchlist);
  };

  const onClickRemoveLike = () => {
    removeLike(watchlist.movieId);
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
