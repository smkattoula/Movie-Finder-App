import React, { Fragment, useEffect, useContext } from "react";
import { Button, NavLink, Card, CardBody } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);

  const {
    getMovie,
    getCredits,
    addMovie,
    loading,
    movie,
    credit,
  } = movieContext;

  useEffect(() => {
    getMovie(match.params.id);
    getCredits(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { original_title, overview, release_date, poster_path } = movie;

  console.log(addMovie);

  return (
    <Fragment>
      <Button color="info" className="mt-5">
        <NavLink href="/" style={{ color: "white" }}>
          Back To Search
        </NavLink>
      </Button>
      <Card className="mt-3" style={movieStyle}>
        <CardBody>
          <h1 className="text-center">{original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            width="100%"
            height="500px"
            alt=""
          />
        </CardBody>
        <CardBody className="text-center mt-2">
          <h2>Description</h2>
          <h3 className="text-center mt-3" style={{ fontWeight: "normal" }}>
            {overview}
          </h3>
          <h2 className="text-center mt-3">
            Release Date:{" "}
            <span className="h3" style={{ fontWeight: "normal" }}>
              {release_date}
            </span>
          </h2>
          <h2 className="text-center mt-3">
            Director:{" "}
            <span className="h3" style={{ fontWeight: "normal" }}>
              {credit}
            </span>{" "}
          </h2>
          <Button
            onSubmit={() => addMovie()}
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
