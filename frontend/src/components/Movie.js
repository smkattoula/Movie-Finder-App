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
      <Card style={movieStyle}>
        <CardBody>
          <h1 className="text-center">{original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            width="100%"
            height="500px"
            alt=""
          />
        </CardBody>
        <CardBody className="text-center mt-3">
          <h2 style={{ textDecoration: "underline" }}>Description</h2>
          <h3 className="text-center mt-3">{overview}</h3>
          <h2 className="text-center mt-3">
            Release Date: <span className="h3">{release_date}</span>
          </h2>
          <h2 className="text-center mt-3">
            Director: <span className="h3">{credit}</span>{" "}
          </h2>
          <Button
            color="success"
            className="fas fa-thumbs-up m-3"
            style={{ width: "25%" }}
          ></Button>
          <Button
            color="danger"
            className="fas fa-thumbs-down m-3"
            style={{ width: "25%" }}
          ></Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

const movieStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem",
};

export default Movie;
