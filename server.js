const express = require('express') // import express
const app = express() // create an instance of express
const connectDB = require('./config/database') // connect to the database
const homeRoutes = require('./routes/home') // import homeRoutes from home.js
const todoRoutes = require('./routes/todos') // import todoRoutes from todos.js
const PORT = process.env.PORT || 2121 // set the port to 5000 or the port in the environment

require('dotenv').config({path: './config/.env'}) // import .env file

connectDB() // connect to the database

app.set('view engine', 'ejs') // set the view engine to ejs
app.use(express.static('public')) // use the public folder for static files
app.use(express.urlencoded({ extended: true })) // use express.urlencoded to parse form data
app.use(express.json()) // use express.json to parse json data

app.use('/', homeRoutes) // use homeRoutes from home.js
app.use('/todos', todoRoutes) // use todoRoutes from todos.js
 
app.listen(process.env.PORT, ()=>{ 
    console.log(`Server is running on port ${PORT}`) // log that the server is running on port #
})    