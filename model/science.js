const mongoose = require('mongoose')

const scienceSchema = new mongoose.Schema({
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
    technology: {
        type: String,
        required: true
    },
    desc: {
        type: Number,
        required: true
    }

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('sciences', scienceSchema)
