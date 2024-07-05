module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'K3km1hjG1Vxn4Rv+KJ1h1g=='),
  },
});
