const express = require('express')
require('dotenv/config')


const app = express();




app.use(express.json());
app.use(express.urlencoded({extended: false}))



const  connection  = require('../database/connection')


async function connectToDatabase() {
    console.log(process.env.DB_USER)
    console.log(process.env.DB_DATABASE)
    console.log(process.env.DB_PASSWORD)
    console.log(process.env.DB_HOST)
    console.log(process.env.DB_DIALECT)
    try {
        await connection.authenticate();
        console.log("Connected")
    } catch (err) {
        console.log('Something went wrong')
        console.log('\n', err)
     }
  
}

connectToDatabase()


const AccountRouter  = require('./router/account')
const PostRouter = require('./router/post')

app.use('/account', AccountRouter)
app.use('/post', PostRouter)


const path = require('path')





const { VerifyToken, VerifyTokenReverse } = require('./router/middlewares/index')








app.use(express.static(path.resolve(__dirname, 'views')))
app.set('view engine', 'ejs');

app.get('/login', VerifyTokenReverse, (req, res) => {
    res.render(path.resolve(__dirname, 'views', 'html', 'login', 'index.ejs'))
 })

app.get('/register', VerifyTokenReverse, (req, res) => {
    res.render(path.join(__dirname, 'views', 'html', 'register', 'index.ejs'))
})
 
app.get('/dashboard', (req, res) => {
    res.render(path.join(__dirname, 'views', 'html', 'dashboard', 'index.ejs'))
})
app.get('/testing', (req, res) => {
    res.send('test')
})
 


const jwt = require('jsonwebtoken')
app.post('/verifyauthorization', (req, res) => { 


    const token = req.headers['authorization']


    if (!token) { return res.json({ error: true, status: 403, message: "Not authorized" }) }
    else {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
            res.locals.userInfo = decoded
            return res.json({ error: false, status: 200, message: "Success", tokeninfo: decoded })
        } catch (err) {
            return res.json({ error: true, status: 403, message: "Invalid token. Not authorized" })
         }
    }


})

console.log(process.env.SECRET_TOKEN)

app.get('/test', (req,res) => { 
    res.json({Hello: 'Testing a'})
})

app.listen(process.env.PORT || 3000, () => console.log("Server is on..."))