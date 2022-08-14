import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/LandingPage.css";
import Logo from "../images/landing-name.png";

function LandingPage() {
  return (
    <div className="landingPage">
      <picture className="landing__logo">
        <img src={Logo} alt="hola" />
        <p className="landing__parragraf">THIS IS YOUR WORLD</p>
      </picture>

      <div className="landing__init">
        <NavLink to="/home">
          <button className="landing__init_btn">GAMEWORLD</button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;
