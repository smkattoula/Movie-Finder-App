import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const FeaturedMovieItem = ({ movie }) => {
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
            <Link to={`/movie/${id}`}>
              <Button style={{ backgroundColor: "#17a2b8", border: "none" }}>
                More Details
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    )
  );
};

export default FeaturedMovieItem;
