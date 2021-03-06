const knex = require("knex");

const environment = process.env.NODE_INV || "development";

const config = require("../knexfile.js")[environment];

module.exports = knex(config);