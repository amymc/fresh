import React from 'react';

const IngredientsTable = (props) => {
  const { ingredients } = props;

  return (
    <table className='recipe-table'>
      <tbody>
        { ingredients.map((ingredient, index) => {
          return <tr key={index}><td className='recipe__table'>{ingredient}</td></tr>
        })}
      </tbody>
    </table>
  )
}

export default IngredientsTable;