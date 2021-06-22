const express = require('express')
const router = express.Router()
const {signup_get, signup_post, userByName, login_get, login_post, userById,updateUserById} = require('../controller/controller')


/**
 * @openapi
 * components:
 *      schemas:
 *          user:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *                  - firstName
 *                  - lastname
 *              properties:
 *                  id:
 *                      type: string
 *                      description: The auto generated unique id of the Admin Members.
 *                  email:
 *                      type: string
 *                      description: email of the user.
 *                  password:
 *                      type: string
 *                      description: password of user.
 *                  firstName:
 *                      type: string
 *                      description: firstName of user.
 *                  lastName:
 *                      type: string
 *                      description: last name of user.
 *                  userType: 
 *                      type: boolean
 *                      description: this yhe default value for user
 *              example:
 *                  id: 60ca4440b297eb46f89b077b
 *                  email: abc@123
 *                  password: 123456789
 *                  firstName: nitin
 *                  lastName: kandikatla
 */


/*
 @openapi
 * tags: 
 *      name: Users
 *      description: The users managing API.
 */



/**
 * @openapi
 * /users/signup:
 *      get:
 *          summary:  Returns all the users stored in the users service 
 *          tags: [CRUD On Users]  
 *          responses:
 *              200:
 *                  description: The list of the users.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/user'
 */

router.get('/signup',signup_get)


/**
 * @openapi
 * /users/signup:
 *      post:
 *          summary: Add new user by passing email,password,firstName and lastName
 *          tags: [Users signup] 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          responses:
 *              '200':
 *                  description: OK.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              example: User's Data inserted successfully.
 *              401:
 *                 description: failed
 *              400:
 *                  description : not found
 */


router.post('/signup',signup_post)
// router.get('/user/:email',userByName)


/**
 * @openapi
 * /users/{id}:
 *      put:
 *          summary: Update a user by its id in the users service
 *          tags: [CRUD On Users] 
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The user id.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          responses:
 *              '200':
 *                  description: OK.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              example: 
 *                                  id: d5fE_asz
 *                                  email: abc@123
 *                                  password: 123456789
 *                                  firstName: brock
 *                                  lastName: lesnar
 *              '404':
 *                  description: The user was not found.
 *              '500':
 *                  description: There was some server error.
 */
router.put('/:id',updateUserById)

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [CRUD On Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: The user was not found
 */


router.get('/:id',userById)

//Login

router.get('/login',login_get)



/**
 * @openapi
 * /users/login:
 *      post:
 *          summary: Login user by passing email,password
 *          tags: [Users login] 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *          responses:
 *              '200':
 *                  description: OK.
 *                  content:
 *                      text/plain:
 *                          schema:
 *                              type: object
 *                              example: User logged in successfully.
 *              401:
 *                 description: failed
 *              400:
 *                  description : not found
 */


router.post('/login',login_post)

module.exports = router
