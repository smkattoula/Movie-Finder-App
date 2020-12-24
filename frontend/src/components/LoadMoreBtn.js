import React, { useState, useContext } from "react";
import { Button } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const LoadMoreBtn = () => {
  const movieContext = useContext(MovieContext);
  const { getFeaturedMovies } = movieContext;

  const [page, setPage] = useState(2);

  const onClick = () => {
    getFeaturedMovies(page);
    setPage(page + 1);
  };

  return (
    <button onClick={onClick} className="mt-3 mb-3" color="info" size="lg">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
