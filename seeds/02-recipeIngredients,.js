
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 1.5},
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: .5},
        {id: 3, recipe_id: 1, ingredient_id: 3, quantity: 2.5},
        {id: 4, recipe_id: 2, ingredient_id: 2, quantity: 4.5},
        {id: 5, recipe_id: 2, ingredient_id: 3, quantity: 6.5},
        {id: 6, recipe_id: 3, ingredient_id: 1, quantity: 1.25},
        {id: 7, recipe_id: 2, ingredient_id: 1, quantity: .75},
        {id: 8, recipe_id: 4, ingredient_id: 7, quantity: 1.5},
        {id: 9, recipe_id: 4, ingredient_id: 8, quantity: 2.5},
        {id: 10, recipe_id: 4, ingredient_id: 5, quantity: 3.5},
        {id: 11, recipe_id: 5, ingredient_id: 8, quantity: 4.0},
        {id: 12, recipe_id: 6, ingredient_id: 7, quantity: 1.75}

      ]);
    });
};
