import React, { useContext, useEffect } from "react";
import MovieContext from "../context/movie/MovieContext";

const WatchList = () => {
  const movieContext = useContext(MovieContext);
  const { getMoviesFromWatchlist } = movieContext;

  useEffect(() => {
    console.log(getMoviesFromWatchlist());
  }, []);

  return (
    <div>
      <h1>Watchlist</h1>
    </div>
  );
};

export default WatchList;
