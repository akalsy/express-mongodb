const mongoose = require('mongoose')

const BlogsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    contenthtml: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

const Blogs = module.exports = mongoose.model('Blogs', BlogsSchema)