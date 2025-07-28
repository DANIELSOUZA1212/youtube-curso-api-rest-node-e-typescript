import knex from 'knex';
import { production } from '../knexfile';

export const db = knex(production);