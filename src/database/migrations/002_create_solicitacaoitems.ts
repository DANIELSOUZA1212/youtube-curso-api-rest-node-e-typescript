import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('solicitacaoitems', table => {
    table.uuid('iditem').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('idsolicitacao').references('idsolicitacao').inTable('solicitacoes').onDelete('CASCADE');
    table.string('idprod').notNullable();
    table.string('descricao').notNullable();
    table.string('un').notNullable();
    table.float('conversor').notNullable();
    table.float('qtd').notNullable();
    table.string('referencia');
    table.string('status').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('solicitacaoitems');
}
