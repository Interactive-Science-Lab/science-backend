module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '1234',
      database : 'science-lab',
      charset: 'utf8'
    },
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' }
  },
    testing: {
      client: 'pg',
      connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : '',
        database : 'science-lab-test',
        charset: 'utf8'
      },
      migrations: { directory: './migrations' },
      seeds: { directory: './seeds' }
    },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' },
    ssl: { rejectUnauthorized: 'false' },
    sslmode: 'require', 
    sslFactory: "org.postgresql.ssl.NonValidatingFactory"
  }


};
