import React from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';

class RecipesBlock extends React.Component {

  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows(recipes) {
    let rows = [];
    for(let i=0; i < recipes.length; i += 2) {
      let unevenElement = recipes[i+1] ? <Recipe index={i+1} recipe={recipes[i+1]}/> : null;
      rows.push(
        <div className='recipes-block__row'>
          <Recipe index={i} recipe={recipes[i]}/>
          {unevenElement}
        </div>
      );
    }
    return rows;
  }

  render() {
    const { recipes } = this.props;

    return (
      <div className={'recipes-block' + (this.props.showLogin ? ' recipes-block--fixed' : '')}>
        {this.renderRows(recipes)}
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
)(RecipesBlock);
