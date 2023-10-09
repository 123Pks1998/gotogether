const { data } = require('autoprefixer')
const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    between: {
        type: String,
        required: true
    },
    and: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    }

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('historys', historySchema)
