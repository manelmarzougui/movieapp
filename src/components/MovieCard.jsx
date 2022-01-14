import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <section className="ggg">
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          backgroundColor: "black",
        }}
      >
        <Link to="/description" state={{ movie: movie }}>
          <Card.Img
            variant="top"
            src={movie.image}
            style={{ height: "100%" }}
          />
        </Link>
        <div className="content">
          <Card.Title className="info">{movie.name}</Card.Title>
          <Card.Text className="info">{movie.year}</Card.Text>
          {/* <Card.Text className="info">{movie.description}</Card.Text> */}
          <ReactStars
            classNames="ratiing"
            count={5}
            value={movie.rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </Card>
    </section>
  );
}

export default MovieCard;
