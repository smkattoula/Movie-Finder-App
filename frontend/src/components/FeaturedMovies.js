import React, { useContext, useEffect } from "react";
import FeaturedMovieItem from "./MovieItem";
import MovieContext from "../context/movie/MovieContext";

const FeaturedMovies = () => {
  const movieContext = useContext(MovieContext);

  const { featured, getFeaturedMovies } = movieContext;

  useEffect(() => {
    getFeaturedMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="mb-3">
        Featured <span className="text-info">Movies</span>
      </h1>
      <div style={movieStyle}>
        {featured.map((movie) => (
          <FeaturedMovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

const movieStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default FeaturedMovies;
