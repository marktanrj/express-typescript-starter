import Knex from 'knex';
import session from 'express-session';
import KnexSessionStoreConnector from 'connect-session-knex';
import { config } from '~/config';

export const knex = Knex(config.database);

const KnexSessionStore = KnexSessionStoreConnector(session);
export const store = new KnexSessionStore({
  knex,
  tablename: 'sessions',
});
