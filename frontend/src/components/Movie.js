import React, { Fragment, useEffect, useContext } from "react";
import { Button, NavLink, Card, CardBody } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);

  const { getMovie, getCredits, loading, movie, credit } = movieContext;

  useEffect(() => {
    getMovie(match.params.id);
    getCredits(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { original_title, overview, release_date, poster_path } = movie;

  return (
    <Fragment>
      <Button color="info">
        <NavLink href="/" style={{ color: "white" }}>
          Back To Search
        </NavLink>
      </Button>
      <Card>
        <CardBody>
          <h1 className="text-center">{original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width="100%"
            height="1000px"
            alt=""
          />
        </CardBody>
        <CardBody className="text-center mt-3">
          <h2 style={{ textDecoration: "underline" }}>Description</h2>
          <h4 className="text-center mt-3">
            <strong>{overview}</strong>
          </h4>
          <h2 className="text-center mt-3">Release Date: {release_date}</h2>
          <h2 className="text-center mt-3">Director: {credit} </h2>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Movie;
