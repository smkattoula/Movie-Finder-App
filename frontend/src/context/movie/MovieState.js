import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  GET_CREDIT,
  GET_MOVIE_WATCHLIST,
  ADD_MOVIE_WATCHLIST,
  MOVIE_ERROR,
} from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    credit: [],
    watchlist: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search Movies
  const searchMovies = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US&query=${text}&page=1&include_adult=false`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

  // Get Movie
  const getMovie = async (id) => {
    setLoading();

    const res = await axios.get(`
    https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${id}?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US
    `);

    dispatch({ type: GET_MOVIE, payload: res.data });
  };

  // Get Movie Credits
  const getCredits = async (id) => {
    setLoading();

    const res = await axios.get(`
    https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${id}/credits?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US
    `);

    dispatch({ type: GET_CREDIT, payload: res.data.crew });
  };

  // Get movies from watchlist
  const getMoviesFromWatchlist = async () => {
    setLoading();

    try {
      const res = await axios.get("/api/movies");

      dispatch({ type: GET_MOVIE_WATCHLIST, payload: res.data });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Add movie to watchlist
  const addToWatchlist = async (watchlist) => {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/movies", watchlist, config);

      dispatch({ type: ADD_MOVIE_WATCHLIST, payload: res.data });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Clear Movies
  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        movieItems: state.movieItems,
        credit: state.credit,
        watchlist: state.watchlist,
        loading: state.loading,
        searchMovies,
        clearMovies,
        getMovie,
        getCredits,
        getMoviesFromWatchlist,
        addToWatchlist,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
