import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import MovieContext from "../context/movie/MovieContext";

const Search = () => {
  const movieContext = useContext(MovieContext);

  const {
    movies,
    featured,
    searchMovies,
    clearMovies,
    getFeaturedMovies,
    clearFeaturedMovies,
  } = movieContext;

  const [text, setText] = useState("");
  const [alert, setAlert] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(<Alert color="danger">Please enter a search term</Alert>);
      setTimeout(() => {
        setAlert();
      }, 5000);
    } else {
      clearFeaturedMovies();
      searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  const onClear = () => {
    clearMovies();
    if (featured.length === 0) {
      getFeaturedMovies();
    }
  };

  return (
    <div className="mt-3">
      {alert}
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
          onClick={onClear}
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default Search;
