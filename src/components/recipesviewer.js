import React from 'react';
import Login from './login';
import RecipesWrapper from './recipeswrapper';
import './../styles/recipesviewer.scss';

class RecipesViewer extends React.Component {
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
        <header className='recipes-viewer__header'>
          <h1 className='recipes-viewer__title'>
            Recipes
          </h1>
          {this.state.isLoggedIn ?
            null :
            <button className='recipes-viewer__button' onClick={() => this.displayLogin()}> Login </button>
          }
        </header>
        {this.state.showLogin ?
          <Login onSubmit={this.hideLogin} onClick={this.closeLogin}/> :
          null
        }
        <RecipesWrapper showLogin={this.state.showLogin} />
      </div>
    )
  }
}

export default RecipesViewer;


