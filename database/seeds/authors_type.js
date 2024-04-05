/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("authors").del();
  await knex("authors").insert([
    { id: 1, name: "Noel" },
    { id: 2, name: "Olson" },
  ]);
};
