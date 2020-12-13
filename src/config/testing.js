const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: process.env.MONGODB_TEST_URI
}

module.exports = config;
