/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const ADMIN_ID = 1;
const OWNER_ID = ADMIN_ID;
const owner_id = OWNER_ID;

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: OWNER_ID, username: 'admin', permissions: 'ADMIN'}
  ]);
};

exports.ADMIN_ID = ADMIN_ID;
