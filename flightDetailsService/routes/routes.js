const express = require('express')
const router = express.Router()   
const {flight_get,flight_post, flightByName,flightById, flightDelete,flightUpdate,flightByLoc} = require('../controller/controller')
const authAdmin = require('../../middleware/authMiddleware')

/**
 * @swagger
 * components:
 *      schemas:
 *          flight:
 *              type: object
 *              required:
 *                  - name
 *                  - from
 *                  - to
 *                  - classType
 *                  - Departure
 *              properties:
 *                  id:
 *                      type: string
 *                      description: The auto generated unique id of the Admin Members.
 *                  name:
 *                      type: string
 *                      description: name of the flight.
 *                  from:
 *                      type: string
 *                      description: location from.
 *                  to:
 *                      type: string
 *                      description: location to.
 *                  classType:
 *                      type: array
 *                      description: type of class.
 *                  Departure: 
 *                      type: Date
 *                      description: Departure time
 *              example:
 *                  name: Air Asia
 *                  from: mumbai
 *                  to: pune
 *                  classType: economy
 *                  Departure: 2021-06-05
 */

 /**
  * @swagger
  * tags:
  *   name: Flight
  *   description: The Flight managing API
  */

/**
 * @swagger
 * /flights/getFlight:
 *   get:
 *     summary: Returns the list of all the flights
 *     tags: [CRUD on flight by Admin]
 *     responses:
 *       200:
 *         description: The list of the flights
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/flight'
 */

router.get('/getFlight',authAdmin,flight_get)


/**
 * @swagger
 * /flights/addFlight:
 *   post:
 *     summary: Create a new flight
 *     tags: [CRUD on flight by Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/flight'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/flight'
 *       201:
 *         description: Unauthorized client
 *         content:
 *           application/json:
 *             schema:
 *               msg: Unauthorized client
 *       400:
 *         description: page not found 
 */

router.post('/addFlight',authAdmin,flight_post)
// router.get('/flight/:name',flightByName)


/**
 * @swagger
 * /flights/flightById/{id}:
 *   get:
 *     summary: Get the flight by id
 *     tags: [CRUD on flight by Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The flight id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/flight'
 *       404:
 *         description: The book was not found
 */

router.get('/flightById/:id',authAdmin,flightById)


/**
 * @swagger
 * /flights/deleteFlight/{id}:
 *   delete:
 *     summary: Remove the flight by id
 *     tags: [CRUD on flight by Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The flight id
 * 
 *     responses:
 *       200:
 *         description: The flight was deleted
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *       404:
 *         description: The book was not found
 */



router.delete('/deleteFlight/:id',authAdmin,flightDelete)

/**
 * @swagger
 * /flights/updateFlight/{id}:
 *  put:
 *    summary: Update the flight by the id
 *    tags: [CRUD on flight by Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The flight id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/flight'
 *    responses:
 *      200:
 *        description: The flight was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/flight'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */


router.put('/updateFlight/:id',authAdmin,flightUpdate)

//search by loc


/**
 * @swagger
 * /flights/flightByLoc:
 *   get:
 *     summary: Get the flight by id
 *     tags: [CRUD on flight by user]
 *     parameters:
 *       - in: query
 *         from: string
 *         to: string
 *         schema:
 *           type: string
 *         required: true
 *         description: The flight source destination
 *     responses:
 *       200:
 *         description: The flight description by sou-des
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/flight'
 *       404:
 *         description: The book was not found
 */

router.get('/flightByLoc',flightByLoc)


module.exports = router