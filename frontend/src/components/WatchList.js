import React, { useContext, useEffect } from "react";
import { Button, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import MovieContext from "../context/movie/MovieContext";
import AuthContext from "../context/auth/AuthContext";

const WatchList = ({ match }) => {
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
  }, []);

  return (
    <>
      <h2>Watchlist</h2>
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
                    className="img-fluid rounded"
                  />
                </Col>
                <Col>
                  <Link
                    style={{ color: "black" }}
                    to={`/movie/${movie.movieId}`}
                  >
                    {movie.movieTitle}
                  </Link>
                </Col>
                <Button
                  onClick={() => deleteMovieFromWatchlist(movie._id)}
                  style={{ height: "50%" }}
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default WatchList;
