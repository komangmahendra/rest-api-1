const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
    hashPass(password){
        return bcrypt.hashSync(password, +process.env.SALT)
    },
    comparePass(password, passwordDB){
        return bcrypt.compareSync(password, passwordDB)
    },
    generateJWT(obj){
        return jwt.sign({email : obj.email, id: obj.id}, process.env.JWT_SECRET, { expiresIn : 12 * 3600})
    },
    verifyJWT(token){
        return jwt.decode(token, process.env.JWT_SECRET)
    }
}