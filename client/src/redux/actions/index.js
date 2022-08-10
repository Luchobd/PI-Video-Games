import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENDERS = "GET_GENDERS";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";

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
    const videogames = await axios.get(rutaVideogames);
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: videogames.data,
    });
  };
}

export function getGenders() {
  return async function (dispatch) {
    const rutaGenders = "http://localhost:3001/gender";
    const genders = await axios.get(rutaGenders);
    return dispatch({
      type: "GET_GENDERS",
      payload: genders.data,
    });
  };
}

export function filterVideogamesByGender(payload) {
  return {
    type: "FILTER_BY_GENDER",
    payload,
  };
}

export function filterVideogamesByCreated(payload) {
  return {
    type: "FILTER_BY_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  console.log(payload);
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByRating(payload) {
  console.log(payload);
  return {
    type: "ORDER_BY_RATING",
    payload,
  };
}

// export function getNameVideogames(name) {
//   return async function (dispatch) {
//     const rutaQueryVideogames = `http://localhost:3001/videogames?name=${name}`;
//     const queryVideogames = await axios.get(rutaQueryVideogames);
//     return dispatch({
//       type: "NAME_BY_QUERY",
//       payload: queryVideogames.data,
//     });
//   };
// }
