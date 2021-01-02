import React, { useContext, useEffect } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import MovieContext from "../context/movie/MovieContext";
import AuthContext from "../context/auth/AuthContext";

const WatchList = () => {
  const movieContext = useContext(MovieContext);
  const authContext = useContext(AuthContext);

  const {
    getMoviesFromWatchlist,
    deleteMovieFromWatchlist,
    watchlist,
    loading,
  } = movieContext;

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    getMoviesFromWatchlist();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <h2 className="mt-3">
          My <span className="text-info">Watchlist</span>
        </h2>
        {watchlist.length === 0 && loading === false ? (
          <Alert color="warning" size="sm">
            Your watchlist is empty
          </Alert>
        ) : (
          <ListGroup>
            {watchlist.map((movie, index) => (
              <ListGroupItem key={index}>
                <Row>
                  <Col lg={1}>
                    <img
                      src={`https://image.tmdb.org/t/p/w780/${movie.movieImage}`}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col lg={10}>
                    <Link
                      style={{ color: "black" }}
                      to={`/movie/${movie.movieId}`}
                    >
                      <h6 className="mt-4">{movie.movieTitle}</h6>
                    </Link>
                  </Col>
                  <Col lg={1}>
                    <Button
                      className="mt-4"
                      color="danger"
                      onClick={() => deleteMovieFromWatchlist(movie._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Container>
    </>
  );
};

export default WatchList;
