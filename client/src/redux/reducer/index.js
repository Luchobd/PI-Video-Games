import {
  GET_VIDEOGAMES,
  GET_GENDERS,
  FILTER_BY_GENDER,
  FILTER_BY_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
} from "../actions";
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
              game.genders.find((el) => el === action.payload)
            );

      return {
        ...state,
        videogames: genderFiltered,
      };

    case FILTER_BY_CREATED:
      const createdFilter =
        action.payload === "VideoGameCreated"
          ? state.allVideogames.filter((game) => game.createdInDb)
          : state.allVideogames.filter((game) => !game.createdInDb);

      return {
        ...state,
        videogames:
          action.payload === "All" ? state.allVideogames : createdFilter,
      };

    case ORDER_BY_NAME:
      const sortedAlf =
        action.payload === "ascAlf"
          ? state.videogames.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.videogames.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        videogames: sortedAlf,
      };

    case ORDER_BY_RATING:
      const sortedRtg =
        action.payload === "ascRtg"
          ? state.videogames.sort((a, b) => {
              if (a.rating > b.rating) return 1;
              if (a.rating < b.rating) return -1;
              return 0;
            })
          : state.videogames.sort((a, b) => {
              if (a.rating > b.rating) return -1;
              if (a.rating < b.rating) return 1;
              return 0;
            });
      return {
        ...state,
        videogames: sortedRtg,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
