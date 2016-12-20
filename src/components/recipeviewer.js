import React from 'react';
import Login from './login';
import RecipesBlock from './recipesblock';

class RecipeViewer extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recipe-viewer">
        <header className="recipe-viewer__header">
          <h1 className="recipe-viewer__title" >
            Hello Fresh Recipes
          </h1>
        </header>
      </div>
    )
  }
}

export default RecipeViewer;


