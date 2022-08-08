// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducer";
// import thunk from "redux-thunk";
// import { composeWitDevTools } from "redux-devtools-extension";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export { store };

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
