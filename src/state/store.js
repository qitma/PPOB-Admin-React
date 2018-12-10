import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import thunk from "redux-thunk";
import { reducer as modal } from "redux-modal";
// export default function configureStore(initialState = {}) {
//   const rootReducer = combineReducers(reducers);
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk)
//   );
// }

export default function configureStore(initialState = {}) {
  // const modalReducer = combineReducers({modal});
  const rootReducer = combineReducers({ ...reducers, modal });
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
