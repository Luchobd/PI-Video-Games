import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "../stylesheets/Paginated.css";
import Logo from "../images/GAMEWORLD3.png";

function Paginated({ videogamesPerPage, allVideogames, paginated }) {
  const pageNumbers = [];
  let page = 1;
  while (page <= Math.ceil(allVideogames / videogamesPerPage)) {
    pageNumbers.push(page);
    page++;
  }
  return (
    <div className="paginated__principal_container">
      <nav className="paginated__container">
        <ul className="paginated">
          {pageNumbers &&
            pageNumbers.map((number) => (
              <li key={number}>
                <button onClick={() => paginated(number)}>{`${number}`}</button>
              </li>
            ))}
        </ul>
      </nav>
      <picture className="paginated__logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </picture>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Paginated;
