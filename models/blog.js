const config = require('../utils/config')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const url = config.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })
    
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        required: true
    },
    author: {
        type: String,
        minlength: 3,
        required: true
    },
    url: {
        type: String,
        minlength: 8,
        required: true
    },
    likes: Number
})

module.exports = mongoose.model('Blog', blogSchema)