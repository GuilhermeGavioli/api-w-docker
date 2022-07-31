const express = require("express");

const router = express.Router();

const PostController = require('../controllers/post')


const { VerifyToken } = require('./middlewares/index')


router.post('/create/:text',VerifyToken, PostController.create_post)
router.delete('/delete/:id',VerifyToken, PostController.post_delete)
router.put('/update/:id/:newText',VerifyToken, PostController.post_update) //update
router.get('/find/:id',VerifyToken, PostController.post_queryOne_get) //find
router.get('/findmany/:ownerId', PostController.post_queryMany_from_a_user_get) //find
router.get('/viewall', PostController.post_queryAll_get) //find


module.exports = router