const db = require('../models')

exports.getTodos = (req, res) => {
    db.Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.send(err))
}

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
        .then(todo => res.status(201).json(todo))
        .catch(e => res.send(err));
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todo_id)
        .then(todo => res.json(todo))
        // catch error = artinya disini id invalid
        .catch(e => res.send(`not found todo with id ${req.params.todo_id}`))
}

exports.updateTodo = (req, res) => {
    // req.body     = apapun yang di edit pada body(json) akan menjadi updatenya
    // {new:true}   = akan me-return todo yang sudah terupdate
    db.Todo.findOneAndUpdate({ _id: req.params.todo_id }, req.body, { new: true })
        .then(todo => res.json(todo))
        .catch(err => res.send(err))
}

exports.deleteTodo = (req, res) => {
    db.Todo.findByIdAndRemove(req.params.todo_id)
        .then(() => res.send('we delete todo'))
        .catch(err => res.send(err))
}

module.exports = exports;