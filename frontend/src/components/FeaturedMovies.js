import React, { useContext, useEffect, useState } from "react";
import FeaturedMovieItem from "../components/FeaturedMovieItem";
import LoadMoreBtn from "../components/LoadMoreBtn";
import MovieContext from "../context/movie/MovieContext";

const FeaturedMovies = () => {
  const movieContext = useContext(MovieContext);

  const {
    featured,
    getFeaturedMovies,
    clearFeaturedMovies,
    movies,
    loading,
  } = movieContext;

  const [page, setPage] = useState(2);

  useEffect(() => {
    if (featured.length >= 0 && loading === false) {
      clearFeaturedMovies();
      getFeaturedMovies();
    }
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
        <div className="movie-style">
          {featured.map((movie, index) => (
            <FeaturedMovieItem key={index} movie={movie} />
          ))}
        </div>
        <LoadMoreBtn page={page} setPage={setPage} />
      </>
    );
  }
};

export default FeaturedMovies;
