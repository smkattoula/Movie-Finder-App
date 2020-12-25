import React, { useReducer } from "react";
import axios from "axios";
import { API_KEY } from "../../components/Config";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import {
  SEARCH_MOVIES,
  SET_LOADING,
  GET_MOVIE,
  GET_CREDIT,
  GET_FEATURED_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_MOVIES_WATCHLIST,
  ADD_MOVIE_WATCHLIST,
  DELETE_MOVIE_WATCHLIST,
  GET_RATING,
  POST_RATING,
  UPDATE_LIKES,
  UPDATE_DISLIKES,
  MOVIE_ERROR,
  CLEAR_MOVIES,
  CLEAR_LOGOUT,
  CLEAR_FEATURED_MOVIES,
  CLEAR_UPCOMING_MOVIES,
} from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    credit: [],
    featured: [],
    upcoming: [],
    watchlist: [],
    ratings: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search all movies
  const searchMovies = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

  // Get a single movie by id
  const getMovie = async (id) => {
    setLoading();

    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
    `);

    dispatch({ type: GET_MOVIE, payload: res.data });
  };

  // Get movie credits info by id
  const getCredits = async (id) => {
    setLoading();

    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US
    `);

    dispatch({ type: GET_CREDIT, payload: res.data.crew });
  };

  // Get all featured movies
  const getFeaturedMovies = async (page) => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    dispatch({ type: GET_FEATURED_MOVIES, payload: res.data.results });
  };

  // Get all upcoming movies
  const getUpcomingMovies = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({ type: GET_UPCOMING_MOVIES, payload: res.data.results });
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

  // Add a movie to watchlist
  const addMovieToWatchlist = async (watchlist) => {
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

  // Delete a movie from watchlist
  const deleteMovieFromWatchlist = async (id) => {
    setLoading();

    try {
      await axios.delete(`/api/movies/${id}`);

      dispatch({ type: DELETE_MOVIE_WATCHLIST, payload: id });
    } catch (error) {
      dispatch({ type: MOVIE_ERROR, payload: error.response.msg });
    }
  };

  // Get single available rating for a movie by id
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

  // Clear movies state
  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  // Clear featured movies state
  const clearFeaturedMovies = () => dispatch({ type: CLEAR_FEATURED_MOVIES });

  // Clear upcoming movies state
  const clearUpcomingMovies = () => dispatch({ type: CLEAR_UPCOMING_MOVIES });

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
        featured: state.featured,
        upcoming: state.upcoming,
        watchlist: state.watchlist,
        ratings: state.ratings,
        loading: state.loading,
        searchMovies,
        clearMovies,
        clearFeaturedMovies,
        clearUpcomingMovies,
        clearLogout,
        getMovie,
        getCredits,
        getFeaturedMovies,
        getUpcomingMovies,
        getMoviesFromWatchlist,
        addMovieToWatchlist,
        deleteMovieFromWatchlist,
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
