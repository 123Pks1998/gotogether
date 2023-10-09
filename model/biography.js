const mongoose = require('mongoose')

const biographySchema = new mongoose.Schema({
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
    profession: {
        type: String,
        required: true
    },
    born: {
        type: String,
        required: true
    },
    died: {
        type: String,
        required: true
    },
    fromdate: {
        type: Date,
        required: true
    },
    todate: {
        type: Date,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('biographys', biographySchema)
