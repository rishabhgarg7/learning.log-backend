const mongoose = require('mongoose')

const project = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {type: String, required: false},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    isPrivate: {
        type: Boolean,
        default: false
    }

}, {timestamps:true})

const Project = mongoose.model('Project',project)

module.exports = Project;
