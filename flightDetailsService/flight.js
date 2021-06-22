const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cookieParser = require('cookie-parser')

const app = express()


//middleware
app.use(cookieParser())
app.use(bodyParser.json())

//swagger

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
                    url: "http://localhost:8030",
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

//routes
app.use('/flights',routes)

//DB connection 

const connection = 'mongodb+srv://nitinkandikatla:nitin@cluster.qotlb.mongodb.net/flightDetails?retryWrites=true&w=majority'
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
    var port = 8030 
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})

