import React from 'react';
import Login from './login';
import RecipeViewer from './recipeviewer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      showLogin: false
    };

    this.closeLogin = this.closeLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
  }

  closeLogin(e) {
    e.preventDefault();
    this.setState({
      showLogin: false
    });
  }

  displayLogin() {
    this.setState({
      showLogin: true
    });
  }

  hideLogin(e) {
    e.preventDefault();
    this.setState({
      isLoggedIn: true,
      showLogin: false
    });
  }

  render() {
    return (
      <div>
        <header className="recipe-viewer__header">
          <h1 className="recipe-viewer__title" >
            Recipes
          </h1>
          {this.state.isLoggedIn ?
            null :
            <button onClick={() => this.displayLogin()}> Login </button>
          }
        </header>
        {this.state.showLogin ?
          <Login onSubmit={this.hideLogin} onClick={this.closeLogin}/> :
          null
        }
        <RecipeViewer showLogin={this.state.showLogin} />
      </div>
    )
  }
}

export default App;


