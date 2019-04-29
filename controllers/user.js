const { User } = require('../models')
const Helper = require('../helpers/helper')

class UserController {

    static signUp(req, res){
        const { email , password } = req.body

        User
        .create({ email , password })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({message : err.message})
        })
    }

    static signIn(req, res){
        const { email, password } = req.body

        User
        .findOne({ where : {email}})
        .then(data => {
            if(data){
                console.log(data)
                if(Helper.comparePass(password, data.password)){
                    let token = Helper.generateJWT({id:data.id, email:data.email})
                    res.status(200).json({token})
                } else {
                    res.status(400).json({message : 'Invalid email/password'})
                } 
            } else {
                res.status(400).json({message : `user not registered`})
            }
        })
        .catch(err => {
            res.status(500).json({message : err.message})
        })
    }
}

module.exports = UserController