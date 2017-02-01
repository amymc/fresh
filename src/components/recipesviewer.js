import React from 'react';
import Login from './login';
import RecipesBlock from './recipesblock';

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
      <div className='recipes-viewer'>
        <div className='recipes-viewer__inner-wrapper'>
          <header className='recipes-viewer__header'>
            <h1 className='recipes-viewer__title'>
              Recipes
            </h1>
            {this.state.isLoggedIn ?
              null :
              <button className='recipes-viewer__button button' onClick={() => this.displayLogin()}> Login </button>
            }
          </header>
          {this.state.showLogin ?
            <Login onSubmit={this.hideLogin} onClick={this.closeLogin}/> :
            null
          }
          <RecipesBlock showLogin={this.state.showLogin} />
        </div>
      </div>
    )
  }
}

export default RecipesViewer;


