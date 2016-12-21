import React from 'react';
import Login from './login';
import RecipeViewer from './recipeviewer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div className="recipe-viewer">
        <header className="recipe-viewer__header">
          <h1 className="recipe-viewer__title" >
            Hello Fresh Recipes
          </h1>
        </header>
        {this.state.isLoggedIn ?
          <RecipeViewer /> :
          <Login /> }
      </div>
    )
  }
}

export default App;


