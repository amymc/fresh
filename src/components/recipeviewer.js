import React from 'react';
import { connect } from 'react-redux';


class RecipeViewer extends React.Component {
  render() {
    const { recipes } = this.props;

    return (
      <div className='recipe-viewer'>
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
