
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 'Wash potatoes', step_number: 1, recipe_id: 1},
        {id: 8, step: 'Boil potatoes', step_number: 2, recipe_id: 1},
        {id: 2, step: 'Boil water', step_number: 1, recipe_id: 2},
        {id: 3, step: 'Turn on oven', step_number: 1, recipe_id: 3},
        {id: 4, step: 'Turn off oven', step_number: 2, recipe_id: 3},
        {id: 5, step: 'Turn around', step_number: 3, recipe_id: 3},
        {id: 6, step: 'Every now and then', step_number: 4, recipe_id: 3},
        {id: 7, step: 'I fall apart', step_number: 1, recipe_id: 3}
      ]);
    });
};
