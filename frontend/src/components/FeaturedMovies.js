import React, { useContext, useEffect } from "react";
import FeaturedMovieItem from "../components/FeaturedMovieItem";
import LoadMoreBtn from "../components/LoadMoreBtn";
import MovieContext from "../context/movie/MovieContext";

const FeaturedMovies = () => {
  const movieContext = useContext(MovieContext);

  const { featured, getFeaturedMovies, movies } = movieContext;

  useEffect(() => {
    getFeaturedMovies();
    // eslint-disable-next-line
  }, []);

  if (movies.length > 0) {
    return null;
  } else {
    return (
      <>
        <h1 className="mt-3 mb-3">
          Featured <span className="text-info">Movies</span>
        </h1>
        <div style={movieStyle}>
          {featured.map((movie, index) => (
            <FeaturedMovieItem key={index} movie={movie} />
          ))}
        </div>
        <LoadMoreBtn />
      </>
    );
  }
};

const movieStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default FeaturedMovies;
