import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const Search = () => {
  const movieContext = useContext(MovieContext);
  const { movies, searchMovies, clearMovies } = movieContext;

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a search term");
    } else {
      searchMovies(text);
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
            style={{ backgroundColor: "#17a2b8", border: "none" }}
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
      {movies.length > 0 && (
        <Button
          style={{ backgroundColor: "#a8a8a8", border: "none" }}
          className="btn btn-block mb-3"
          onClick={clearMovies}
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default Search;
