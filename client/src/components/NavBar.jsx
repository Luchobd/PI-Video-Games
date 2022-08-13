import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/NavBar.css";

function NavBar() {
  return (
    <header>
      <nav className="nav">
        <ul className="navUl">
          <li>
            <NavLink className={"navbar__link"} exact to={"/"}>
              Principal
            </NavLink>
          </li>
          <li>
            <NavLink className={"navbar__link"} to={"/home"}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={"navbar__link"} to={"/videogame"}>
              Video Game Creation
            </NavLink>
          </li>
          <li>
            <NavLink className={"navbar__link"} to={"/thanks"}>
              Thanks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
