const express = require('express')
const router = express.Router()
const jwt = require ('jsonwebtoken')
const posts = [
    {
        username: 'Kyle',
        title: 'post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
    ]
    
router.get('/posts', authenticateToken, function(req,res){
    res.json(posts.filter(posts => posts.username === req.user.name))
})
    
    
router.post('/login', function(req,res){
    const username = req.body.username
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json(accessToken)
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)

    if (authHeader == null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, function(err,user){
        if(err) return sendStatus(403)
        req.user = user
        next()
    })


}


module.exports = router

