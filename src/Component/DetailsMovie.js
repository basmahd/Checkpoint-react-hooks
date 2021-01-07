import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import "./style.css";

const DetailsMovie = ({ match, data }) => {
  //console.log("data : ", data);
  const [movie, setMovie] = useState({});
  console.log(" match : ", match);
  useEffect(() => {
    setMovie(data.find((el) => el.Title === match.params.Title));
  }, [match.params.Title]);
  return movie ? (
    <div
      style={{
        paddingLeft: "30%",
        paddingTop: "5%",
      }}
    >
      <div className="CardDetails">
        <div className="Carddesc">
          <h1 className="title" style={{ color: "pink" }}>
            {" "}
            {movie.Title}{" "}
          </h1>
          <h3 className="text" style={{ color: "white" }}>
            {" "}
            {movie.Description}
          </h3>
          <h3 style={{ color: "pink" }}> Movie Trailer </h3>
          <iframe
            width="465"
            height="250"
            src={movie.trailerlink}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title={movie.Title}
          ></iframe>
        </div>
      </div>
      
      <Link to="/">
        <h4 style={{marginRight:"45%",marginTop:"4%"}}>Return to main page</h4>
      </Link>
    </div>
  ) : (
    <div></div>
  );
};

export default DetailsMovie;

