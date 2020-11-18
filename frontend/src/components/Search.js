import React, { useState, useContext } from "react";
import MovieContext from "../context/movie/MovieContext";

const Search = () => {
  const movieContext = useContext(MovieContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a search term");
    } else {
      movieContext.searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search movies.."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {movieContext.movies.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={movieContext.clearMovies}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
