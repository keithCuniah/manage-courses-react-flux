import React from "react";
import { Link } from "react-router-dom";

// Uppercase for component
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>PluralSight administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps. </p>
      {/* <a href="/about">About</a> */}
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
