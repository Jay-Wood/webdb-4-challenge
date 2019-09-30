
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Tortillas'},
        {id: 2, ingredient_name: 'Cheese'},
        {id: 3, ingredient_name: 'Beans'},
        {id: 4, ingredient_name: 'Salsa'},
        {id: 5, ingredient_name: 'Beef'},
        {id: 6, ingredient_name: 'Onions'},
        {id: 7, ingredient_name: 'Chicken'},
        {id: 8, ingredient_name: 'Pork'},
        {id: 9, ingredient_name: 'Jalapenos'}
      ]);
    });
};
