import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  filterVideogamesByGender,
  getGenders,
} from "../redux/actions";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginated from "./Paginated";
import "../stylesheets/Home.css";

function Home() {
  // usar hooks
  const dispatch = useDispatch();
  // trae todos los personajes del reducer
  const allVideogames = useSelector((state) => state.videogames);
  const allGenders = useSelector((state) => state.genders);

  // PAGINADO
  const [currentPage, setCurrentPege] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);

  const indexOfLastVideogames = currentPage * videogamesPerPage; // 15 - Indice final de video juegos
  const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage; // 0 - Indice incial de video juegos
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogames,
    indexOfLastVideogames
  ); // video juegos actuales, es decir todos los video juegos

  const paginated = (pageNumber) => {
    setCurrentPege(pageNumber);
  };

  // ===========================================================================

  // IMPORTANTE
  // Traer los personajes cuando se monta el componente
  useEffect(() => {
    dispatch(getVideogames()); // Todo esto viene de actions/index
    dispatch(getGenders());
  }, [dispatch]);

  //handles
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getVideogames());
  };

  const handleFilterSelectGenders = (e) => {
    dispatch(filterVideogamesByGender(e.target.value));
  };

  return (
    <div>
      <SearchBar />
      {/* reset all */}
      <button onClick={(e) => handleClick(e)}>
        Volver a cargar todos los video juegos
      </button>

      <div>
        {/* Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y rating  */}
        <select name="" id="">
          <option value="order">Order</option>
          <optgroup label="Rating">
            <option value="ascAlf">Ascending</option>
            <option value="descAlf">Decendents</option>
          </optgroup>
          <optgroup label="Alphabetic">
            <option value="ascAlf">Ascending</option>
            <option value="descAlf">Decendents</option>
          </optgroup>
        </select>

        {/* Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros */}
        <select name="" id="" onChange={(e) => handleFilterSelectGenders(e)}>
          <option value="All">All...</option>
          <optgroup label="API">
            <option value="VideoGame">Video Games</option>
          </optgroup>
          <optgroup label="Created">
            <option value="VideoGameCreated">Video Games Created</option>
          </optgroup>
          <optgroup label="Genders">
            {allGenders?.map((el) => (
              <option value={el.name} key={el.id}>
                {el.name}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Área donde se verá el listado de videojuegos. Deberá mostrar su: */}
      <Paginated
        videogamesPerPage={videogamesPerPage}
        allVideogames={allVideogames.length}
        paginated={paginated}
      />
      {currentVideogames?.map((game) => {
        return (
          <div key={game.id}>
            <NavLink className={"link"} to={`/home/${game.id}`}>
              <Card
                name={game.name}
                genders={game.gender.join(" ")}
                background_image={game.background_image}
              />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

// 38:20 -> video 3

export default Home;
