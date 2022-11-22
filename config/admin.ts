export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d7ca6ed6edfb3b8fc3dc7e385467314'),
  },
});
