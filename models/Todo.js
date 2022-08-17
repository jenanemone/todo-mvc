const mongoose = require('mongoose') // import mongoose

const TodoSchema = new mongoose.Schema({ // create a new schema for todos
  todo: { // create a todo field
    type: String, // set the type to string
    required: true, // set the required property to true
  },
  completed: { // create a completed field
    type: Boolean, // set the type to boolean
    required: true, // set the required property to true
  }
})

module.exports = mongoose.model('Todo', TodoSchema) // export the schema to server.js
