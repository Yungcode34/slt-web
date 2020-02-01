const express = require('express');
const router = express.Router()

const { sayHi } = require('../controllers/user')
//routes
router.get("/", sayHi );

module.exports = router;