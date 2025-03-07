import React, { useState } from 'react';

const IngredientInput = () => {
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Ingredient submitted:', ingredient);
  };

  return (
    <div>
      <h1>Enter Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredient}
          onChange={handleInputChange}
          placeholder="Enter ingredient"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IngredientInput;
