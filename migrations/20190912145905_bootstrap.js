
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl => {
    tbl.increments();
    tbl.string("recipe_name", 128)
        .unique()
        .notNullable();
  })
  .createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("ingredient_name", 128)
        .unique()
        .notNullable();
  })
  .createTable("recipeIngredients", tbl => {
    tbl.increments();
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    tbl.float("quantity")
  })
  .createTable("instructions", tbl => {
    tbl.increments();
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    tbl.integer("step_number")
        .unsigned()
        .notNullable()  
    tbl.text("step")
    })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipeIngredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
