import { React } from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div>
      <h1>404 not found</h1>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
