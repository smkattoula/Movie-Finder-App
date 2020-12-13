import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_LOGOUT,
  GET_MOVIE,
  GET_CREDIT,
  GET_MOVIES_WATCHLIST,
  ADD_MOVIE_WATCHLIST,
  DELETE_MOVIE_WATCHLIST,
  GET_RATING,
  POST_RATING,
  UPDATE_LIKES,
  UPDATE_DISLIKES,
  MOVIE_ERROR,
  CLEAR_MOVIES,
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
    case GET_RATING:
      return {
        ...state,
        ratings: state.ratings.map((x) => x._id === action.payload._id),
        loading: false,
      };
    case POST_RATING:
      const rating = action.payload;

      const existRating = state.ratings.find((x) => x._id === rating._id);

      if (existRating) {
        return {
          ...state,
          ratings: state.ratings.map((x) =>
            x._id === existRating._id ? rating : x
          ),
          loading: false,
        };
      } else {
        return {
          ...state,
          ratings: [...state.ratings, rating],
          loading: false,
        };
      }
    case UPDATE_LIKES:
      return {
        ...state,
        watchlist: state.watchlist.map((movie) =>
          movie._id === action.payload.id
            ? { ...state.watchlist, likes: action.payload.likes }
            : state.watchlist
        ),
        loading: false,
      };
    case UPDATE_DISLIKES:
      return {
        ...state,
        watchlist: state.watchlist.map((movie) =>
          movie._id === action.payload.id
            ? { ...state.watchlist, dislikes: action.payload.dislikes }
            : state.watchlist
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
