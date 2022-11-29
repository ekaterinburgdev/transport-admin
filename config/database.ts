export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgres_tc'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_tc'),
      user: env('POSTGRES_USER', 'strapi_tc'),
      password: env('POSTGRES_PASSWORD', 'strapi_tc'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
