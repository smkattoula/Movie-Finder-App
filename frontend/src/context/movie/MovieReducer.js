import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  GET_CREDIT,
  GET_MOVIE_WATCHLIST,
  ADD_MOVIE_WATCHLIST,
  DELETE_MOVIE_WATCHLIST,
  MOVIE_ERROR,
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
    case GET_MOVIE_WATCHLIST:
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
        movie: {},
        credit: [],
        watchlist: [],
        loading: false,
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
