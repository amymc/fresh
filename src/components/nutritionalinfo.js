 import React from 'react';

const NutritionalInfo = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nutritional info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Carbs</td>
          <td>{props.carbos}</td>
        </tr>
        <tr>
          <td>Calories</td>
          <td>{props.calories}</td>
        </tr>
        <tr>
          <td>Fats</td>
          <td>{props.fats}</td>
        </tr>
        <tr>
          <td>Proteins</td>
          <td>{props.proteins}</td>
        </tr>
        <tr>
          <td>Fibers</td>
          <td>{props.fibers}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default NutritionalInfo;