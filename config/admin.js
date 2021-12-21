module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ab4ef441c562b90b7358f7d6d885739'),
  },
});
