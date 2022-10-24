import knex from 'knex';
import { config } from '~/config';

export const knexDb = knex(config.database);
