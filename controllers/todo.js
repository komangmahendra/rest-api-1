const { todo } = require('../models')


class TodoController{
    static create(req, res){
        const userId = req.decode.id
        const {title , description}  = req.body

        todo.create({title, description, userId})
        .then(data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json({message : err.message})
        })
    }

    static getAll(req, res){
        const userId = req.decode.id

        todo.findAll({where : {userId}})
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json({message : err.message})
        })
    }

    static getById(req, res){
        const { id } = req.params

        todo.findOne({where : {id}})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message})
        })
    }

    static delete(req, res){
        const { id } = req.params

        todo.destroy({ where : {id} })
        .then( ()=> {
            res.status(204).json()
        })
        .catch( err => {
            res.status(500).json({ message : err.message})
        })
    }

    static update(req, res){
        const { id } = req.params
        const { title, description } = req.body

        todo.findOne( { where : { id } })
        .then( data => {
            data.title = title || data.title
            data.description = description || data.description
            return data.save()
        })
        .then( data_save => {
            res.status(200).json(data_save)
        })
        .catch( err => {
            res.status(500).json({ message : err.message})
        })

    }


    static updatePut(req, res){
        const { id } = req.params
        const { title, description } = req.body

        todo.update({ title, description}, {where : {id}})
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json({ message : err.message})
        })

    }
}

module.exports = TodoController