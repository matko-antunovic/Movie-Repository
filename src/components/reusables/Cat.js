import React from "react";
import "./Cat.css";
import { Link } from "react-router-dom";

const Cat = () => {
  const headers = [
    "Top Rated Movies",
    "Top Rated Shows",
    "On Air Today",
    "MyWatchlist"
  ];
  return (
    <React.Fragment>
      {headers.map(h => (
        <div key={h} className="cat">
          <Link
            to={`/${h}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: "arial",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {h}
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Cat;
