const express = require('express');
const router = express.Router();

const main =require('../controller/MainController');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/blog', main.blog);
router.get('/contact', main.contact);
router.get('/HomeCrossfitLite', main.HomeCrossfitLite);
router.get('/HomeFitness', main.HomeFitness);
router.get('/Index2', main.Index2);
router.get('/program', main.program);
router.get('/service', main.service);
router.get('/SingleBlog', main.SingleBlog);
router.get('/trainer', main.trainer);




module.exports = router;