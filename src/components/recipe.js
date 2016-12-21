import React from 'react';
import './../styles/recipe.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavourite: false
    };

    this.favouriteItem = this.favouriteItem .bind(this);
  }

  favouriteItem() {
    console.log('favourite');
    if (this.state.isFavourite) {
      this.setState({isFavourite: false});
      return;
    }
    this.setState({isFavourite: true});
  }

  render() {
    const { recipe } = this.props;

    return (
      <div className='recipe'>
        <h2 className='recipe__title'>
          {recipe.name}
        </h2>
        <span className='recipe__subtitle'>
          {recipe.headline}
        </span>
        <img className='recipe__image' alt={recipe.name} src={recipe.thumb} />
        <div className='recipe__info'>
          <p>
            {recipe.description}
          </p>
        </div>
        <button className={'recipe__button' + (this.state.isFavourite ? ' recipe__button--selected' : '')} onClick={() => this.favouriteItem()}>&hearts;</button>
      </div>
    )
  }
}

export default Recipe;
