import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

const FeaturedMovieItem = ({ movie }) => {
  const { title, poster_path, id } = movie;

  return (
    poster_path && (
      <div>
        <Card className="text-center h-100">
          <CardBody className="hide-font">
            <Link to={`/movie/${id}`}>
              <CardTitle
                style={{ textDecoration: "underline", color: "black" }}
                tag="h5"
              >
                {title}
              </CardTitle>
            </Link>
          </CardBody>
          <Link to={`/movie/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              width="100%"
              alt=""
            />
          </Link>
        </Card>
      </div>
    )
  );
};

export default FeaturedMovieItem;
