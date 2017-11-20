const express   = require('express');
const db        = require('../models');
const helpers   = require('../helpers/todos')

/* db from require('../models)
    otomatis melihat file index.js
    dan di dlm file index.js ada Todo
    sehingga db.Todo bisa dilakukan */
    
const router = express.Router();

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)


router.route('/:todo_id')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)


module.exports={router}