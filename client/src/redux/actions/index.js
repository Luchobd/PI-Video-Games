import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENDERS = "GET_GENDERS";

// Conection from back to front
// Ruta video games
// export function getVideogames() {
//   return async function (dispatch) {
//     let resp = await fetch("http://localhost:3001/videogames");
//     const videogames = await resp.json();
//     return dispatch({
//       type: "GET_VIDEOGAMES",
//       payload: videogames,
//     });
//   };
// }

export function getVideogames() {
  return async function (dispatch) {
    const rutaVideogames = "http://localhost:3001/videogames";
    var videogames = await axios.get(rutaVideogames);
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: videogames.data,
    });
  };
}

export function getGenders() {
  return async function (dispatch) {
    const rutaGenders = "http://localhost:3001/gender";
    let genders = await axios.get(rutaGenders);
    return dispatch({
      type: "GET_GENDERS",
      payload: genders.data,
    });
  };
}
