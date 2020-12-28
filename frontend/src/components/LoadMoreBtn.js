import React, { useContext } from "react";
import { Button } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const LoadMoreBtn = ({ page, setPage }) => {
  const movieContext = useContext(MovieContext);
  const { getFeaturedMovies } = movieContext;

  const onClick = () => {
    getFeaturedMovies(page);
    setPage(page + 1);
    console.log(page);
  };

  return (
    <Button
      onClick={onClick}
      className="mt-3 mb-3"
      color="info"
      size="lg"
      style={{
        marginLeft: "44.5%",
      }}
    >
      Load More
    </Button>
  );
};

export default LoadMoreBtn;
