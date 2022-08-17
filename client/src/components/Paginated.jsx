import React from "react";
import SearchBar from "./SearchBar";
import "../stylesheets/Paginated.css";

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
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Paginated;
