const express = require('express')
const router = express.Router()

router.use('/interestingness', require('./middles/interestingness'))

module.exports = router