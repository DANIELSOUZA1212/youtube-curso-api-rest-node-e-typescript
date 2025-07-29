import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');
  return knex.schema.createTable('solicitacoes', table => {
    table.uuid('idsolicitacao').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('solicitante').notNullable();
    table.date('datalan').notNullable();
    table.string('hora').notNullable();
    table.string('status').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('solicitacoes');
}
