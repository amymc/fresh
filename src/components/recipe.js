import React from 'react';

const Recipe = (props) => {
  const { recipe } = props;
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
    </div>
  )
}

export default Recipe;
