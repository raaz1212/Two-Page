import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowDetails from "./ShowDetails";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowDetails = (show) => {
    setSelectedShow(show);
    console.log(show);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f2f2f2",
        padding: "1rem",
        justifyContent: "center",
        height: "full",
      }}
    >
      <div style={{ position: "relative", width: "45%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>TV Shows</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gridGap: "1rem",
          }}
        >
          {shows.map((show) => (
            <div
              key={show.show.id}
              style={{
                backgroundColor: "#ffffff",
                padding: "0.5rem",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                transition: "box-shadow 0.3s",
                cursor: "pointer",
              }}
              onClick={() => handleShowDetails(show.show)}
            >
              <div>
                <h3 style={{ marginBottom: "0.25rem" }}>{show.show.name}</h3>
                <h5 style={{ marginBottom: "0.25rem" }}>
                  Status: {show.show.status}
                </h5>
                <button
                  style={{
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                  }}
                  onClick={() => handleShowDetails(show.show)}
                >
                  Show Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "10%",
        }}
      ></div>
      <div style={{ flex: "0 0 45%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Show Details
        </h1>

        {selectedShow && <ShowDetails show={selectedShow} />}
      </div>
    </div>
  );
};

export default ShowList;
