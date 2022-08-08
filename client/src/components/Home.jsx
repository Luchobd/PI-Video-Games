import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenders } from "../redux/actions";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "../stylesheets/Home.css";

function Home() {
  // usar hooks
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  // console.log(allVideogames);
  // const allGenders = useSelector((state) => state.genders);

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

  return (
    <div>
      <SearchBar />
      {/* reset all */}
      <button onClick={(e) => handleClick(e)}>
        Volver a cargar todos los video juegos
      </button>

      <div>
        {/* Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético  */}
        <select name="" id="">
          <option value="ascAlf">Acendente</option>
          <option value="descAlf">Descendente</option>
        </select>
        {/* Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden de rating */}
        <select name="" id="">
          <option value="ascRat">Acendente</option>
          <option value="descRat">Descendente</option>
        </select>
        {/* Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros */}
        <select name="" id="">
          <option value="All">Todos</option>
          <option value="Gender">Genders</option>
          <option value="VideoGame">Video Games</option>
          <option value="VideoGameCreated">Video Games Created</option>
        </select>
      </div>

      {/* Área donde se verá el listado de videojuegos. Deberá mostrar su: */}
      {allVideogames?.map((game) => {
        // console.log(allVideogames);
        return (
          <div key={game.id}>
            <NavLink className={"link"} to={`/home/${game.id}`}>
              <Card
                name={game.name}
                genders={game.genres}
                background_image={game.background_image}
              />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

// 1:05:00

export default Home;
