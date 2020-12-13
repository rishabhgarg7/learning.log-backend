const atomicCrudControllers = require('../../utils/crud')
const Entry = require('./entry.model')

const basicCrudControllers = atomicCrudControllers(Entry)
const anotherController = async (req,res) => {
    const data = Entry.find()
    //do something else here
}

const crudContollers = {...basicCrudControllers,anotherController}

console.log(crudContollers)

module.exports = crudContollers