/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('username', 60).notNullable();
            table.string('permissions', 255).notNullable();
        })
        .createTable('user_platforms', (table) => {
            table.increments('id');
            table.bigint('user_id');
            table.string('platform');
            table.string('platform_user_id');
            table.jsonb('meta');
        })
        .createTable('songs', (table) => {
            table.increments('id');
            table.decimal('duration').notNullable();
            table.string('name', 255).notNullable();
            table.string('artist', 500).notNullable();
            table.bigint('owner_id');
            table.jsonb('meta');
        })
        .createTable('asanas', (table) => {
            table.increments('id');
            table.string('name', 1000).notNullable();
            table.string('cue', 1000);
            table.decimal('duration').notNullable();
            table.bigint('owner_id');
        })
        .createTable('sections', (table) => {
            table.increments('id');
            table.decimal('duration').notNullable();
            table.string('name', 255).notNullable();
            table.bigint('owner_id');
        })
        .createTable('flows', (table) => {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.bigint('owner_id');
        })
        .createTable('asana_flow_map', (table) => {
            table.increments('id');
            table.bigint('asana_id', 255).notNullable();
            table.bigint('flow_id').notNullable();
            table.integer('order')
        })
        .createTable('section_flow_map', (table) => {
            table.increments('id');
            table.bigint('section_id', 255).notNullable();
            table.bigint('flow_id').notNullable();
            table.integer('order')
        })
        .createTable('song_flow_map', (table) => {
            table.increments('id');
            table.bigint('song_id', 255).notNullable();
            table.bigint('flow_id').notNullable();
            table.integer('order')
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable("users")
        .dropTable("user_platforms")
        .dropTable("songs")
        .dropTable("asanas")
        .dropTable("sections")
        .dropTable("flows")
        .dropTable("asana_flow_map")
        .dropTable("section_flow_map")
        .dropTable("song_flow_map")
        ;
};
