// Configure a basic router setup:
const express = require('express');
const router = express.Router();

// Require the Todo model:
const Todo = require('../models/todo');

// note that we'll need to define routes here later
// add an index route for our 'todos' resource inside of 'routes/todos.js'
router.get('/', function(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
});


module.exports = router;