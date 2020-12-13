const config = {
    secrets: {
      jwt: 'thisisr3@llys3cr3t'
    },
    dbUrl: process.env.MONGODB_PROD_URI
  }

  module.exports = config;
