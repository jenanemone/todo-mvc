const express = require('express') // import express
const router = express.Router() // create an instance of express.Router()
const homeController = require('../controllers/home')   // import homeController from home.js

router.get('/', homeController.getIndex)  // '/' is the root of the app

module.exports = router // export router to server.js