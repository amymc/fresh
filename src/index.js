import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import RecipesViewer from './components/recipesviewer';

render(
 <Provider store={store}>
    <RecipesViewer />
  </Provider>,
  document.getElementById('root')
);