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
  ADD_MOVIE,
} from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    movieItems: [],
    credit: [],
    loading: true,
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

  // Add movie to database
  const addMovie = async (id) => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=f92856e5e4bd57f9fd884d655c767a2e&language=en-US
    `);

    dispatch({
      type: ADD_MOVIE,
      payload: {
        movie_title: data.original_title._id,
      },
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
        movieItems: state.movieItems,
        credit: state.credit,
        loading: state.loading,
        searchMovies,
        clearMovies,
        getMovie,
        getCredits,
        addMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
