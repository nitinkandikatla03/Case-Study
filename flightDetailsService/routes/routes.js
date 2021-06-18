const express = require('express')
const router = express.Router()
const {flight_get,flight_post, flightByName,flightById, flightDelete,flightUpdate,flightByLoc} = require('../controller/controller')

router.get('/flight',flight_get)
router.post('/flight',flight_post)
// router.get('/flight/:name',flightByName)
router.get('/flight/:id',flightById)
router.delete('/flight/:id',flightDelete)
router.put('/flight/:id',flightUpdate)

//search by loc

router.get('/flightByLoc',flightByLoc)


module.exports = router