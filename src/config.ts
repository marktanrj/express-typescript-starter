// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeConfig = require('config');

interface Config {
  port: number;
  database: {
    client: string;
    connection: {
      host: string;
      port: number;
      user: string;
      password: string;
      database: string;
    }
  },
  session: {
    secret: string,
    cookie: {
      maxAge: number,
    },
  }
}

export const config = nodeConfig as Config;
