module.exports = function(req, res){
    const { message , status } = req.error
    res.status(status).json({message})
}