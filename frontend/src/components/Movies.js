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
      <div style={movieStyle}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

const movieStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Movies;
