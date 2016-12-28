import React from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';
import './../styles/recipeswrapper.scss';

class RecipesWrapper extends React.Component {
  render() {
    const { recipes } = this.props;

    return (
      <div className={'recipes-wrapper' + (this.props.showLogin ? ' recipes-wrapper--fixed' : '')}>
        { recipes.map((recipe, index) => {
          return <Recipe key={index} recipe={recipe} />
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(
  mapStateToProps,
  null
)(RecipesWrapper);
