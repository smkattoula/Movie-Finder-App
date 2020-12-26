import React, { useEffect, useContext } from "react";
import { UncontrolledCarousel } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const UpcomingMoviesCarousel = () => {
  const movieContext = useContext(MovieContext);
  const { getUpcomingMovies, upcoming, movies } = movieContext;

  useEffect(() => {
    getUpcomingMovies();

    // eslint-disable-next-line
  }, []);

  const items = upcoming.map((movie, index) => ({
    src: `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`,
    altText: "Upcoming Movies",
    caption: "",
    header: `${movie.title}`,
    key: `${index}`,
  }));

  if (movies.length > 0) {
    return null;
  } else {
    return (
      <>
        <h1 className="mb-3">
          Upcoming <span className="text-info">Movies</span>
        </h1>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
};

export default UpcomingMoviesCarousel;
