import React from "react";
import "./ShowDetails.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowDetails = ({ show, onBookTicket }) => {
  return (
    <div className="card">
      <img src={show.image?.medium} className="card-img-top" alt={show.name} />
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">{show.summary?.replace(/<[^>]+>/g, "")}</p>
        <p>Premiere Date: {show.premiered}</p>
        <p>Language: {show.language}</p>
        <p>Genre: {show.genres.join(", ")}</p>
        <Link to="/booking">
          <Button>Book Ticket</Button>
        </Link>
      </div>
    </div>
  );
};

export default ShowDetails;
