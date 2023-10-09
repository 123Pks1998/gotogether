const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('videos', videoSchema)
