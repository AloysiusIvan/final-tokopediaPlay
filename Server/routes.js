const express = require('express');
const router = express.Router();
const Video = require('./Models/videoModel.js');

router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find({}, {urlVideoId:1, _id:0});
        if(videos.length === 0){
            return res.status(404).json({message: `Videos doesn't exist.`})
        }
        const videoRes = {
            videos: videos.map(v => ({
                videoId: v.urlVideoId,
                urlThumbnail: `https://img.youtube.com/vi/${v.urlVideoId}/maxresdefault.jpg`
            }))
        };
        res.json(videoRes);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/videos/:id', async (req, res) => {
    try {
        const video = await Video.find({urlVideoId: req.params.id}, {urlVideoId:1, _id:0});
        if (video.length === 0) {
            return res.status(404).json({ message: `Video doesn't exist.` });
        }
        const videoIdRes = video.map(v => ({
            videoId: v.urlVideoId,
            urlEmbed: `https://www.youtube.com/embed/${v.urlVideoId}?controls=0`
        }));
        res.json(videoIdRes[0]);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/videos/:id/products', async (req, res) => {
    try {
        const products = await Video.find({urlVideoId: req.params.id}, {product:1, _id:0});
        if (products[0].product.length === 0) {
            return res.status(404).json({ message: `Products doesn't exist.` });
        }
        const productRes = {
            products: products[0].product.map(p => ({
                productId: p._id,
                productLink: p.productLink,
                title: p.title,
                price: p.price
            }))
        };
        res.json(productRes);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/videos/:id/comments', async (req, res) => {
    try {
        const comments = await Video.find({urlVideoId: req.params.id}, {commentList:1, _id:0});
        if (comments[0].commentList.length === 0) {
            return res.status(404).json({ message: `Comments doesn't exist.` });
        }
        const commentRes = {comments: comments[0].commentList};
        res.json(commentRes);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/videos/:id/comments', async (req, res) => {
    try {
        if(req.body.comment && req.body.username){
            await Video.updateOne({urlVideoId: req.params.id}, {$push: {commentList:{
                username: req.body.username,
                comment: req.body.comment,
                timestamp: Date.now()
            }}});
            res.json({message: 'Success'});
        }else{
            res.status(400).json({message: 'Fail'});
        }
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;