import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  getGenders,
  filterVideogamesByGender,
  filterVideogamesByCreated,
  orderByName,
  orderByRating,
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

  const [order, setOrder] = useState("");
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
    e.preventDefault();
    dispatch(filterVideogamesByGender(e.target.value));
  };

  const handleFilterSelectCreated = (e) => {
    e.preventDefault();
    dispatch(filterVideogamesByCreated(e.target.value));
  };

  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPege(1);
    setOrder(`Ordenado ${e.target.value}`);
  };
  const handleOrderByRating = (e) => {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPege(1);
    setOrder(`Ordenado ${e.target.value}`);
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
        <select name="" id="" onChange={(e) => handleOrderByRating(e)}>
          <optgroup label="Rating">
            <option value="ascRtg">Ascending</option>
            <option value="descRtg">Decendents</option>
          </optgroup>
        </select>
        <select name="" id="" onChange={(e) => handleOrderByName(e)}>
          <optgroup label="Alphabetic">
            <option value="ascAlf">Ascending</option>
            <option value="descAlf">Decendents</option>
          </optgroup>
        </select>

        {/* Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros */}
        <select name="" id="" onChange={(e) => handleFilterSelectCreated(e)}>
          <option value="All">All...</option>
          <optgroup label="API">
            <option value="VideoGame">Video Games</option>
          </optgroup>
          <optgroup label="Created">
            <option value="VideoGameCreated">Video Games Created</option>
          </optgroup>
        </select>
        <select name="" id="" onChange={(e) => handleFilterSelectGenders(e)}>
          <option value="All">All...</option>
          <optgroup label="Genders">
            {allGenders?.map((el) => (
              <option value={el.name} key={el.id}>
                {el.name}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      {/* onChange={(e) => handleFilterSelectCreated(e)} */}
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
                genders={game.genders}
                rating={game.rating}
                background_image={game.background_image}
              />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

// 1:17:00 -> video 3

export default Home;
