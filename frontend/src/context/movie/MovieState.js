import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import { SEARCH_MOVIES, SET_LOADING, CLEAR_MOVIES, GET_MOVIE } from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search Movies
  const searchMovies = async (text) => {
    setLoading();
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
        loading: state.loading,
        searchMovies,
        clearMovies,
        getMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
