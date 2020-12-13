const mongoose = require('mongoose')

const entry = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    },
    isBookmarkEntry: {
        type: Boolean,
        default: false
    }

}, {timestamps:true})

const Entry = mongoose.model('Entry',entry)

module.exports = Entry

