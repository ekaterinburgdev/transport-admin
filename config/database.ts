export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'transport-cms'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'uRG@X%iKcXSb6HZ!2BWC64Y8'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
