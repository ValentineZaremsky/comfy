import { combineReducers, createStore } from "redux";
import categoryReducer from './category-reducer';

let reducers = combineReducers({
  categoryBlock: categoryReducer
});

let store = createStore(reducers);

export default store;
