import {
  SEARCH_MOVIES,
  SET_LOADING,
  GET_MOVIE,
  GET_CREDIT,
  GET_FEATURED_MOVIES,
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
  CLEAR_FEATURED_MOVIES,
  CLEAR_LOGOUT,
} from "../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case GET_CREDIT:
      return {
        ...state,
        credit: action.payload
          .filter((crew) => crew.job === "Director")
          .map((crew) => crew.name),
        loading: false,
      };
    case GET_FEATURED_MOVIES:
      return {
        ...state,
        featured: [...state.featured, ...action.payload],
        loading: false,
      };
    case GET_MOVIES_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
        loading: false,
      };
    case ADD_MOVIE_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
        loading: false,
      };
    case DELETE_MOVIE_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie._id !== action.payload
        ),
        loading: false,
      };
    case GET_RATINGS:
    case GET_RATING:
      return {
        ...state,
        ratings: action.payload,
        loading: false,
      };
    case POST_RATING:
      return {
        ...state,
        ratings: [...state.ratings, action.payload],
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        ratings: state.ratings.map((movie) =>
          movie.movieId === action.payload.id
            ? action.payload.likes
            : state.ratings
        ),
        loading: false,
      };
    case UPDATE_DISLIKES:
      return {
        ...state,
        ratings: state.ratings.map((movie) =>
          movie.movieId === action.payload.id
            ? action.payload.unlikes
            : state.ratings
        ),
        loading: false,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false,
      };
    case CLEAR_FEATURED_MOVIES:
      return {
        ...state,
        featured: [],
        loading: false,
      };
    case CLEAR_LOGOUT:
      return {
        ...state,
        movies: [],
        movie: {},
        credit: [],
        watchlist: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
