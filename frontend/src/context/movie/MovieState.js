import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_LOGOUT,
  GET_MOVIE,
  GET_CREDIT,
  GET_MOVIES_WATCHLIST,
  ADD_MOVIE_WATCHLIST,
  DELETE_MOVIE_WATCHLIST,
  GET_RATINGS,
  GET_RATING,
  POST_RATING,
  UPDATE_LIKES,
  UPDATE_DISLIKES,
  MOVIE_ERROR,
  CLEAR_MOVIES,
} from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    credit: [],
    watchlist: [],
    ratings: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search Movies
  const searchMovies = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US&query=${text}&page=1&include_adult=false`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

  // Get Movie
  const getMovie = async (id) => {
    setLoading();

    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US
    `);

    dispatch({ type: GET_MOVIE, payload: res.data });
  };

  // Get Movie Credits
  const getCredits = async (id) => {
    setLoading();

    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US
    `);

    dispatch({ type: GET_CREDIT, payload: res.data.crew });
  };

  // Get movies from watchlist
  const getMoviesFromWatchlist = async () => {
    setLoading();

    try {
      const res = await axios.get("/api/movies");

      dispatch({ type: GET_MOVIES_WATCHLIST, payload: res.data });
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

  // Delete a movie from the watchlist
  const deleteMovieFromWatchlist = async (id) => {
    setLoading();

    try {
      await axios.delete(`/api/movies/${id}`);

      dispatch({ type: DELETE_MOVIE_WATCHLIST, payload: id });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Get all available ratings for movies
  const getRatings = async () => {
    setLoading();

    try {
      const res = await axios.get(`/api/ratings`);

      dispatch({ type: GET_RATINGS, payload: res.data });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Get single available rating for a movie
  const getRating = async (id) => {
    setLoading();

    try {
      const res = await axios.get(`/api/ratings/${id}`);

      dispatch({ type: GET_RATING, payload: res.data });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Post rating for a movie
  const postRating = async (rating) => {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/ratings", rating, config);

      dispatch({ type: POST_RATING, payload: res.data });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Add likes for a movie
  const addLike = async (id) => {
    setLoading();

    try {
      const res = await axios.put(`/api/ratings/like/${id}`);

      dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Remove likes from a movie
  const removeLike = async (id) => {
    setLoading();

    try {
      const res = await axios.put(`/api/ratings/unlike/${id}`);

      dispatch({ type: UPDATE_DISLIKES, payload: { id, unlikes: res.data } });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Clear movies state for clear button functionality
  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  // Clear state when user logs out
  const clearLogout = () => dispatch({ type: CLEAR_LOGOUT });

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
        ratings: state.ratings,
        loading: state.loading,
        searchMovies,
        clearMovies,
        clearLogout,
        getMovie,
        getCredits,
        getMoviesFromWatchlist,
        addToWatchlist,
        deleteMovieFromWatchlist,
        getRatings,
        getRating,
        postRating,
        addLike,
        removeLike,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
