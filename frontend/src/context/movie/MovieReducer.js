import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  GET_CREDIT,
  ADD_MOVIE,
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
    case ADD_MOVIE:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
