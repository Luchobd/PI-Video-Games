// import { GET_VIDEOGAMES, GET_GENDERS } from "../actions";
const initialState = {
  videogames: [],
  genders: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        // videogames: [...state.videogames, action.payload],
        videogames: [...action.payload],
      };
    case "GET_GENDERS":
      return {
        ...state,
        genders: action.payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
