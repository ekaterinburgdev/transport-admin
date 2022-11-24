export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7dbcc8e3de82cfa8c0ef6c87973a0ade'),
  },
});
