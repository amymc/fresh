import React from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';
import './../styles/recipeviewer.css';

class RecipeViewer extends React.Component {
  render() {
    const { recipes } = this.props;

    return (
      <div className={'recipe__viewer' + (this.props.showLogin ? ' recipe__viewer--fixed' : '')}>
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
)(RecipeViewer);
