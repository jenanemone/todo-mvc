const Todo = require('../models/Todo') // import the Todo model

module.exports = { // export the following:
    getTodos: async (req,res)=>{ // getTodos is the name of the function
        try{ // try to do the following
            const todoItems = await Todo.find() // find all todos in the database
            const itemsLeft = await Todo.countDocuments({completed: false}) // count the number of todos that are not completed
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft}) // render the todos.ejs file with the todos and the number of todos that are not completed
        }catch(err){ // if there is an error
            console.log(err) // log the error
        }
    },
    createTodo: async (req, res)=>{ // createTodo is the name of the function
        try{ // try to do the following
            await Todo.create({todo: req.body.todoItem, completed: false}) // create a new todo in the database
            console.log('Todo has been added!') // log that the todo has been added
            res.redirect('/todos') // redirect to the todos page
        }catch(err){ // if there is an error
            console.log(err) // log the error
        }
    },
    markComplete: async (req, res)=>{ // markComplete is the name of the function
        try{ // try to do the following
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{  // find the todo in the database and update the completed field to true
                completed: true 
            })
            console.log('Marked Complete') // log that the todo has been marked complete
            res.json('Marked Complete')     // send a response to the client
        }catch(err){ // if there is an error
            console.log(err) // log the error
        }
    },
    markIncomplete: async (req, res)=>{ // markIncomplete is the name of the function
        try{ // try to do the following
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{ // find the todo in the database and update the completed field to false
                completed: false
            })
            console.log('Marked Incomplete') // log that the todo has been marked incomplete
            res.json('Marked Incomplete') // send a response to the client
        }catch(err){    // if there is an error
            console.log(err) // log the error
        }
    },
    deleteTodo: async (req, res)=>{ // deleteTodo is the name of the function
        console.log(req.body.todoIdFromJSFile)      // log the todo id from the client
        try{ // try to do the following
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile}) // find the todo in the database and delete it
            console.log('Deleted Todo') // log that the todo has been deleted
            res.json('Deleted It') // send a response to the client
        }catch(err){ // if there is an error
            console.log(err) // log the error
        }
    }
}    