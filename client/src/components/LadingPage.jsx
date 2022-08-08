import React from "react";
import { Link } from "react-router-dom";

function LadingPage() {
  return (
    <div>
      <h1>Welcome to the LandingPage</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}

export default LadingPage;
