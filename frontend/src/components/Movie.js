import React, { Fragment, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Spinner, Col, Row } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";
import AuthContext from "../context/auth/AuthContext";
import AddToWatchlistBtn from "../components/AddToWatchlistBtn";
import ThumbsUpDownBtns from "../components/ThumbsUpDownBtns";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const authContext = useContext(AuthContext);

  const [alertWatchlist, setAlertWatchlist] = useState("");
  const [alertRating, setAlertRating] = useState("");

  const {
    getMovie,
    getCredits,
    loading,
    movie,
    credit,
    ratings,
    getRating,
  } = movieContext;

  const { loadUser, isAuthenticated } = authContext;

  const { original_title, overview, release_date, poster_path } = movie;

  const movieId = match.params.id;

  useEffect(() => {
    loadUser();
    getMovie(match.params.id);
    getCredits(match.params.id);
    getRating(match.params.id);

    // eslint-disable-next-line
  }, [match.params.id]);

  if (loading)
    <Spinner
      color="secondary"
      size="lg"
      style={{ margin: "auto", display: "block" }}
    />;

  return (
    <Fragment>
      <div className="mt-3">{alertWatchlist}</div>
      <div className="mt-3">{alertRating}</div>
      <Button color="info" className="mt-5">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Back To Search
        </Link>
      </Button>
      <Card className="mt-3">
        <Row>
          <Col lg={6}>
            <CardBody>
              <h1 className="text-center">{original_title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                width="100%"
                height="500px"
                alt=""
              />
            </CardBody>
          </Col>
          <Col lg={6}>
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
              <AddToWatchlistBtn
                movieId={movieId}
                movieInfo={movie}
                setAlertWatchlist={setAlertWatchlist}
                isAuthenticated={isAuthenticated}
              />
              <ThumbsUpDownBtns
                loading={loading}
                movieId={movieId}
                movieInfo={movie}
                ratings={ratings}
                setAlertRating={setAlertRating}
                isAuthenticated={isAuthenticated}
              />
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default Movie;
