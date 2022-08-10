import React from "react";

function Paginated({ videogamesPerPage, allVideogames, paginated }) {
  const pageNumbers = [];
  let page = 1;
  while (page <= Math.ceil(allVideogames / videogamesPerPage)) {
    pageNumbers.push(page);
    page++;
  }
  return (
    <nav>
      <ul className="paginated">
        {pageNumbers &&
          pageNumbers.map((number, index) => (
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
