import React, { useState, useContext } from "react";
import { Form, FormGroup, Input } from "reactstrap";
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
    <div className="mt-3">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="text"
            placeholder="Search movies..."
            value={text}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
      {/* {movieContext.movies.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={movieContext.clearMovies}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default Search;
