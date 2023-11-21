const express = require('express');
const { getPackages } = require('../controllers/paquetes');
const router = express.Router()

router.get("/getPackages/:id",getPackages )

module.exports = router

