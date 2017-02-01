import React from 'react';
import IngredientsTable from './ingredientstable';
import NutritionalInfo  from './nutritionalinfo';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    console.log('test', props);

    this.state = {
      isFavourite: false,
      rating: null
    };

    this.favouriteItem = this.favouriteItem.bind(this);
    this.rateItem = this.rateItem.bind(this);
    this.renderCookingTime = this.renderCookingTime.bind(this);
    this.renderRating = this.renderRating.bind(this);
  }

  favouriteItem() {
    if (this.state.isFavourite) {
      this.setState({isFavourite: false});
      return;
    }
    this.setState({isFavourite: true});
  }

  rateItem(index) {
    this.setState({rating: index});
  }

  renderCookingTime(time) {
    let minutes = time.slice(2, 4);
    return (<p> Cooking Time: {minutes} minutes</p>);
  }

  renderRating() {
    let stars = [];
    for (let i=1; i < 6; i++) {
      stars.push( 
        <span className={'recipe__rating' + (this.state.rating >= i ? ' recipe__rating--active' : '')} data-number={i} key={i} onClick={() => this.rateItem(i)}>
          &#x2605;
        </span>
      );
    }
    return stars;
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
          {this.renderCookingTime(recipe.time)}
          <p>Difficulty level: {recipe.difficulty}</p>
          <p>This is a recipe for the {recipe.products[0]}</p>
          <IngredientsTable ingredients={recipe.ingredients} />
          <NutritionalInfo {...recipe} />
        </div>
        <button className={'recipe__button' + (this.state.isFavourite ? ' recipe__button--selected' : '')} onClick={() => this.favouriteItem()}>&hearts;</button>
        {this.renderRating()}
      </div>
    )
  }
}

export default Recipe;
