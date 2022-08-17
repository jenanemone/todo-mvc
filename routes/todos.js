const express = require('express') // import express
const router = express.Router() // create an instance of express.Router()
const todosController = require('../controllers/todos') // import todosController from todos.js

router.get('/', todosController.getTodos) // '/' is the root of the app

router.post('/createTodo', todosController.createTodo) // '/createTodo' is the route to create a todo

router.put('/markComplete', todosController.markComplete) // '/markComplete' is the route to mark a todo as complete

router.put('/markIncomplete', todosController.markIncomplete) // '/markIncomplete' is the route to mark a todo as incomplete

router.delete('/deleteTodo', todosController.deleteTodo)  // '/deleteTodo' is the route to delete a todo

module.exports = router // export router to server.js