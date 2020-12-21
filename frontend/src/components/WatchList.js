import React, { useContext, useEffect } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import MovieContext from "../context/movie/MovieContext";
import AuthContext from "../context/auth/AuthContext";

const WatchList = () => {
  const movieContext = useContext(MovieContext);
  const authContext = useContext(AuthContext);

  const {
    getMoviesFromWatchlist,
    getRatings,
    deleteMovieFromWatchlist,
    watchlist,
    loading,
  } = movieContext;

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    getMoviesFromWatchlist();
    getRatings();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className="p-3">
        <h2>My Watchlist</h2>
        {watchlist.length === 0 && loading === false ? (
          <p>Your cart is empty</p>
        ) : (
          <ListGroup>
            {watchlist.map((movie, index) => (
              <ListGroupItem key={index}>
                <Row>
                  <Col md={1}>
                    <img
                      src={`https://image.tmdb.org/t/p/w780/${movie.movieImage}`}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col md={4}>
                    <Link
                      style={{ color: "black" }}
                      to={`/movie/${movie.movieId}`}
                    >
                      {movie.movieTitle}
                    </Link>
                  </Col>
                  <Col md={4}></Col>
                  <Col md={2}>
                    <Button
                      className="mt-2"
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
