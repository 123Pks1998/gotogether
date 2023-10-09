const mongoose = require('mongoose')

const tcbgSchema = new mongoose.Schema({
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
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('tcbgs', tcbgSchema)
