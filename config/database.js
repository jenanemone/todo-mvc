const mongoose = require('mongoose') // import mongoose

const connectDB = async () => { // create a function to connect to the database
  try { // try to connect to the database
    const conn = await mongoose.connect(process.env.DB_STRING, { // connect to the database
      useNewUrlParser: true, // use new url parser
      useUnifiedTopology: true, // use unified topology
      useFindAndModify: false, // use find and modify
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`) // log the connection to the database
  } catch (err) { // if there is an error
    console.error(err) // log the error
    process.exit(1) // exit the process
  }
}

module.exports = connectDB // export the function to server.js
