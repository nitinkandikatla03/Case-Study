const express = require('express')
const mongoose = require('mongoose')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()



//middleware
app.use(cookieParser())
app.use(bodyParser.json())
// enable cors to the server
 const corsOpt = {
    origin: process.env.CORS_ALLOW_ORIGIN || '*', // this work well to configure origin url in the server
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // to works well with web app, OPTIONS is required
    allowedHeaders: ['Content-Type', 'Authorization'] // allow json and token in the headers
};
app.use(cors(corsOpt)); // cors for all the routes of the application
app.options('*', cors(corsOpt)); // automatic cors gen for HTTP verbs in all routes, This can be redundant but I kept to be sure that will always work



const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: "1.0.0",
            title: "Flight Boooking System",
            description: "This is our first Swagger Application built in Node js.",
            contact: {
                name: "Nitin"
                // url: "http://localhost:8020/user/signup",
                // email: "support@example.com"
            }
        },
        servers: [
                {
                    url: "http://localhost:8050",
                }
        ],
    },

    apis: ["./routes/routes.js"]
};

const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


//routes midddleware
app.use('/admins',routes)


//DB connection
const connection = 'mongodb+srv://nitinkandikatla:nitin@cluster.qotlb.mongodb.net/admin1?retryWrites=true&w=majority'
const connector = mongoose.connect(connection,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
 })
 mongoose.connection.on('connected',() => {
     console.log("Connected to database")
 })
 .then( (data) =>{
     var port = 8050
     app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
     })
    app.get("/",(req,res)=>{
        res.send("connected");
    });
  }) 

  module.exports = app


