import React from "react";
import "../stylesheets/Paginated.css";

function Paginated({ videogamesPerPage, allVideogames, paginated }) {
  const pageNumbers = [];
  let page = 1;
  while (page <= Math.ceil(allVideogames / videogamesPerPage)) {
    pageNumbers.push(page);
    page++;
  }
  return (
    <nav className="paginated__container">
      <ul className="paginated">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginated(number)}
              >{`Pag: ${number}`}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Paginated;
