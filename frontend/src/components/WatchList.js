import React, { useContext, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import MovieContext from "../context/movie/MovieContext";
import AuthContext from "../context/auth/AuthContext";

const WatchList = () => {
  const movieContext = useContext(MovieContext);
  const authContext = useContext(AuthContext);

  const { getMoviesFromWatchlist, watchlist, loading } = movieContext;
  const { loadUser, token } = authContext;

  useEffect(() => {
    if (token) {
      loadUser();
    }
    getMoviesFromWatchlist();
  }, []);

  return (
    <>
      <h2>Watchlist</h2>
      {loading === "false" && watchlist.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {watchlist.map((movie, index) => (
            <ListGroupItem key={index}>
              <Row>
                <Col md={2}>
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
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default WatchList;
