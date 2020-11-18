import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import { SEARCH_MOVIES, SET_LOADING, CLEAR_MOVIES } from "../types";

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

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US&query=${text}&page=1&include_adult=false`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
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
        // getMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
