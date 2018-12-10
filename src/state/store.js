import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import thunk from "redux-thunk";
// export default function configureStore(initialState = {}) {
//   const rootReducer = combineReducers(reducers);
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk)
//   );
// }

export default function configureStore(initialState={}) {
  const rootReducer = combineReducers(reducers);
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}