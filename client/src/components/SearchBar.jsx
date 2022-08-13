import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handeleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameVideogames(name));
    setName("");
  };

  return (
    <>
      {/* Input de búsqueda para encontrar videojuegos por nombre */}
      <form action="" onSubmit={(e) => handeleSubmit(e)}>
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => handeleInputChange(e)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
