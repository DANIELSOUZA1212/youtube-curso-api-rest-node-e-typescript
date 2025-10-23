import { knex } from 'knex';
import 'dotenv/config';
import pg from 'pg';
import { production } from './Environment'; // configuração do banco
export const Knex = knex(production);

// Converte BIGINT do PostgreSQL para number no Node.js
if (process.env.NODE_ENV === 'production') {
  pg.types.setTypeParser(20, 'text', parseInt);
}

// Função para escolher o ambiente (production, test, etc.)
const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    // case 'test': return test;
    default:
      return production;
  }
};

// Cria a instância do Knex usando a configuração do ambiente
const connection = knex(getEnvironment());

export default connection;
