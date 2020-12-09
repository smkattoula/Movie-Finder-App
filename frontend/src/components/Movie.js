import React, { Fragment, useEffect, useContext } from "react";
import { Button, NavLink, Card, CardBody } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";
import AuthContext from "../context/auth/AuthContext";
import AddToWatchlistBtn from "./AddToWatchlistBtn";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const authContext = useContext(AuthContext);

  const { getMovie, getCredits, loading, movie, credit } = movieContext;

  const { loadUser, token } = authContext;

  const movieId = match.params.id;

  useEffect(() => {
    if (token) {
      loadUser();
    }
    getMovie(match.params.id);
    getCredits(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { original_title, overview, release_date, poster_path } = movie;

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
            src={
              poster_path && `https://image.tmdb.org/t/p/w780/${poster_path}`
            }
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
          <AddToWatchlistBtn movieId={movieId} movieInfo={movie} />
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
