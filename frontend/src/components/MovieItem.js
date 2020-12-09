import React from "react";
import { Card, CardBody, CardLink, CardTitle } from "reactstrap";

const MovieItem = ({ movie }) => {
  const { title, poster_path, id } = movie;

  return (
    poster_path && (
      <div>
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
          </CardBody>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width="100%"
            alt=""
          />
          <CardBody>
            <CardLink href={`/movie/${id}`}>More Details</CardLink>
          </CardBody>
        </Card>
      </div>
    )
  );
};

export default MovieItem;
