const config = {
  port: 4000,
  database: {
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'admin',
      password : 'password',
      database : 'database'
    }
  },
  session: {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 10000,
    },
  }
}

export default config;
