const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    img: {
        type: String,
    },
    img: {
        type: String,

    },
    img: {
        type: String,

    },
    img: {
        type: String,

    },
    category: {
        type: String,
    },

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('videos', videoSchema)
