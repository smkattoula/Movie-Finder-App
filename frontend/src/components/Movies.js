import React, { useContext } from "react";
import { Spinner } from "reactstrap";
import MovieItem from "./MovieItem";
import MovieContext from "../context/movie/MovieContext";

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const { loading, movies } = movieContext;

  if (loading) {
    return (
      <Spinner
        color="secondary"
        size="lg"
        style={{ margin: "auto", display: "block" }}
      />
    );
  } else {
    return (
      <div className="movie-style">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

export default Movies;
