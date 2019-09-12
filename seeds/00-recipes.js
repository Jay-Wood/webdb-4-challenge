
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Tacos'},
        {id: 2, recipe_name: '2Tacos'},
        {id: 3, recipe_name: '3Tacos'},
        {id: 4, recipe_name: '4Tacos'},
        {id: 5, recipe_name: '5Tacos'},
        {id: 6, recipe_name: '6Tacos'},
        {id: 7, recipe_name: '7Tacos'},
      ]);
    });
};
