const express = require('express')
// const { signup_post, signup_get, login_post } = require('../../userService/controller/controller')
const router = express.Router()
const {login_get,login_post,signup_get,signup_post,adminById } = require('../controller/controller')


/**
 * @openapi
 * components:
 *      schemas:
 *          admin:
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

router.get('/login',login_get)
router.get('/signup',signup_get)


/**
 * @openapi
 * /admins/login:
 *      post:
 *          summary: Login admin by passing email,password
 *          tags: [Admin login] 
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
 *                              example: admin logged in successfully.
 *              401:
 *                 description: failed
 *              400:
 *                  description : not found
 */


router.post('/login',login_post)


/**
 * @openapi
 * /admins/signup:
 *      post:
 *          summary: Add new admin by passing email,password,firstName and lastName
 *          tags: [Admin signup] 
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/admin'
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
router.get('/adminById',adminById)



module.exports = router