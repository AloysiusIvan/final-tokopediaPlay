const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productLink: {
        required: false,
        type: String
    },
    title: {
        required: false,
        type: String
    },
    price: {
        required: false,
        type: String
    }
});

const commentListSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    comment: {
        required: false,
        type: String
    }
},
{
    _id: false,
    timestamps: true
});

const videoSchema = new mongoose.Schema({
    urlVideoId:{
        required: true,
        type: String
    },
    product: [productSchema],
    commentList: [commentListSchema]
},
{
    versionKey: false,
    collection: 'videos'
});

module.exports = mongoose.model('Video', videoSchema);