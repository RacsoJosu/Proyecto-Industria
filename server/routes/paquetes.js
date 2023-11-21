const express = require('express');
const { getPackages } = require('../controllers/paquetes');
const router = express.Router()

router.get("/getPackages",getPackages )

module.exports = router

