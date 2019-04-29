const Helper = require('../helpers/helper')
const { todo } = require('../models')

module.exports = {
    Authenticate(req, res, next){
        if(req.headers.token){
            const decode = Helper.verifyJWT(req.headers.token)
            req.decode = decode
            next()
        } else {
            res.status(400).json({message : 'Token required'})
        }
    },
    Authorize(req, res, next){
        const {id}  = req.params
        todo.findOne({ where : { id }})
        .then( data => {
            if(data){
                if(data.userId == req.decode.id){
                    next()
                } else {
                    res.status(400).json({ message : `UnAuthorize`})
                }
            } else {
                res.status(400).json({ message : `data not found`})
            }
        })
        .catch(err => {
            res.status(500).json({ message : err.message})
        })
    }
}