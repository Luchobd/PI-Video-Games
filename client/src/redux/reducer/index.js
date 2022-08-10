import { GET_VIDEOGAMES, GET_GENDERS, FILTER_BY_GENDER } from "../actions";
const initialState = {
  videogames: [],
  allVideogames: [],
  genders: [],
  newArray: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: [...action.payload],
        allVideogames: [...action.payload],
      };
    case GET_GENDERS:
      return {
        ...state,
        genders: action.payload,
      };

    case FILTER_BY_GENDER:
      const allVideogames = state.allVideogames;

      const genderFiltered =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((game) =>
              game.gender.find((el) => el === action.payload)
            );

      return {
        ...state,
        videogames: genderFiltered,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
