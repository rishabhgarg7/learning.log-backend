const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: process.env.MONGODB_DEV_URI
}

module.exports = config;
