import { createStore } from 'redux';
import rootReducer from './reducers';

import recipes from './data/recipes';

const defaultState = {
  recipes
};

const store = createStore(
  rootReducer,
  defaultState
);

export default store;
