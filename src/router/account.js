const express = require('express')
const accountControllers  = require('../controllers/account');

const AccountRouter = express.Router();


const { VerifyTokenReverse }  = require('./middlewares/index')


AccountRouter.post('/register',VerifyTokenReverse, accountControllers.register_post)
AccountRouter.post('/login', VerifyTokenReverse, accountControllers.login_post)
AccountRouter.get('/viewall', accountControllers.view_all_users_get)

module.exports = AccountRouter