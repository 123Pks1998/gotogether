const mongoose = require('mongoose')

const stateSchema = new mongoose.Schema({
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
    capital: {
        type: String,
        required: true
    },
    district: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    formation: {
        type: String,
        required: true
    },
    festival: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('states', stateSchema)
