module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      '4b6f52e5c377f4b9e7e4e5f8e44c6f50e2e8e6e1e3e7e7e6e8e6e8e6e8e6e8e6',
      '3c7d52f5a337e4b9e7e4e5f8e44c6f50e2e8e6e1e3e7e7e6e8e6e8e6e8e6e8e6',
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
