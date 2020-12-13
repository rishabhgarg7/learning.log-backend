//external modules import
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')
//internal modules import
const connect = require('./utils/db')
const config = require('./config/index')
// const userRoutes = require('./routes/api/user-routes')
// const enrtyRoutes = require('./routes/api/entry-routes')
// const projectRoutes = require('./routes/api/project-routes')


//configuration variables for backend-app
// const PORT = (process.env.PORT) || 3001
const app = express();
app.disable('x-powered-by')
//hooking middlewares
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))

//API routes
app.get('/health', (req,res) => {
    res.send({message:"Ok. Working!"})
})

// app.use()
// app.use('/api/user',userRoutes)
// app.use('/api/entry',enrtyRoutes)
// app.use('/api/project',projectRoutes)


//server listening
const start = async () => {
    try {
      await connect()
      app.listen(config.port, () => {
        console.log(`REST API on http://localhost:${config.port}/api`)
      })
    } catch (e) {
      console.error(e)
    }
}

module.exports = start
